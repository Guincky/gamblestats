import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSoccerBall } from '@fortawesome/free-solid-svg-icons'

import api from '../services/api';
import { Badge, Card, Avatar, Progress, Divider, Timeline, Collapse, Skeleton, Spin, Descriptions} from 'antd';
const { Panel } = Collapse;

                  
