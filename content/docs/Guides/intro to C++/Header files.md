---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTHZVZQP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaud93GuDBTb9Y1hjs8qnZAYG2ujuPTcRDgd4k9Pe8SQIhAPPfgnxeg5yHGpJBAojzMB7cY7vrOI8u18N5gpR4VZi4KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzl%2FLcAG9Ur%2Bg7IaDwq3AMKSHS5vhgt%2BoK2uvf%2Bzo3i%2FpgD5JaGGyiQbnhslK1xgwGM%2FWZnrKIbt7Q8EsEOSIj2rdXJVAbIVsxL%2FmqeAmfS%2BisvC%2BkEjcMNER9n8%2BBH1Z5ykgSC2B7ZfemT191TBEH8Bu%2FBFJ6WJTz6fEPXKAykRVoM1Q93ETgCTLeFBGApfJf5lBIYwm8V5x8tsH7VQHt5OB4g4QZBWI2%2FxFSE83X2PLQ9j%2BOLUJ5Rf957MZTqlspI9fkpdS8vDqKnEIYwvmB%2BIIcqTSozzCrfzmIeGPhMkZKVhqqcSxzWyRkH%2BrXzWUvDXAySJMQo5emHxuVLYsJtGzvRtvQ34Rfs%2B9730ruOXgRU1LbM%2F0NojysUyKym2KFkHrWRknITH5uUfJ7sdxTfZ2Di%2BexzfoUnxn4VQmhFWsZhN9qeKKtDQnmBXQnJ6Hbdh7nuDKJPwfH5yl39Li00nvpl%2FNKvnMbq1NIsgtJGs3gnBG%2FOgYV2bFUDt1Q%2F7jxee6qgSiSKi4xH0RcIfDaRXVwjm48XuNaauZn5eLa%2BpZ9tHAWkOaJmtNk1T76o4%2BVGU4q0bpTVt4TIvCWU590HsVpnt4C7p7burjKjOHp7%2B2JdfgkJZGagBWyL3I3zQmNu%2BlIVB%2BtFShbyjDDVsLm%2FBjqkAYqcFoo8tlgec2le2h7srBYDYNi3DdNR09nYKrpAQJEL1lorVBIpUDvJvTrMeOkKhhE6%2BTDjNF8BHpdpmxFlmRQiec5ahFvGYT4y%2BtrmqruUt%2BTjk0Y7GgSzvNpL1eylaS%2FiwiihsEGuvvzURqYJd%2BTfACY9%2F2r%2Biy1TCfW%2F3qNviSc6YEyyz%2FYxJyyLuEY3c75li6Q1S1NJ1ifGcUsyjhlJysta&X-Amz-Signature=c13cb246badea498d826d2288103b8d2a13961e7918a9bb208f3de6923fb9850&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
