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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3CA6GKL%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbTmWH9U2R1ykK%2BtcHMumXkRKiD698xDWgpTmzu8t33gIgdNyPGqOuAUrP3TLRKkboLKiaU5YfEEiZvnDwxE1jtX0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOE4dBGm6RoCzKCafCrcA4PCMahxLu%2FEXLvNRHrsMxa9WfdTqy%2BdvaiZcjIBES7WRa73xA3Vi06EK2LViMJDG03zvRSPGdSQWJQZDfds8ZLd8nsHmX9ZFu%2BNQAa2jGu2k1nHeJ7C53jVwiOuTZ1LJEpd9M3qgj1WOMI7CwfLXZNp4Z%2B%2BR3U1VRAQA7w%2FbtfKFD9VWkNDl2TKm6YIqcaauTIkVVJ%2F3eNvFMmV31MO6KNyrttk2ZCHhdN4NaHtHQ70mkYeTCmuBJXCuGR52SyIUDtiz0lm791kfoO6z9cHy%2FMsH27H5gUyf6NMnijKRuKOa0SsV4184hEV9jrNmQGZVHqvkknXtSqycsuuX27n46HBLvMolhGmYV1W3naVGVk3Osu5g2Ib%2FCi%2Fxjk9DpEQdLj6fGe5HWpWUR%2FJun56BkIaNCxgpZpIt2Q6%2BYBzYwH7EEWTkIe5h6DhzLZNMGTEKb%2BqhQipB3gpXbeUardlEYPj3J4HczmbyOBaH9zhgZ8%2FULL7S79%2FMzImTiOPh2JSLnjD%2B%2BBlf0r4wDvzRPYIpPyZ4Cp5fs6b%2Fhp4l4ywaib6cYE2mDQHgncJ1jIiK4sH%2BGJ%2BTb39v%2BkWK2jAZJEGSIG6%2FVuRe%2BDhK3csJY5dEB3jltic94Ry0tmT1TzmMLj5mL4GOqUBZdDYW1twRUU7Qa3NduI4jmT1T6cRaV6C3cmK4RvdiSqN9K1bQE0PlimUUJMQCrebyIolp0Jb2W1xs%2FX%2BQz7HmlG02NoNpXSqwU1DA%2BvOTbkisv%2FQ7rxdweMlV%2Bju4FEdvDladm8PI58uTW9hOYzoaCYlDyqjusRCWpJIgiTvWRVQU4j2TnE6bGBgC2lvzsBSlKqemA8gjuvUFFBSVEFVek7%2FimET&X-Amz-Signature=2d6d42c73e6bd0b1027efed0ab2a96e3322f9fc8463ee2516b5db71b6d70e257&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
