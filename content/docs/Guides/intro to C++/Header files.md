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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDNQN6KM%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAT%2FkSgJQf8L%2FUqJt0O2TcR1WtWm6GZAhGh12izASOa%2FAiEAwWQDZ3oT6%2B3okLZz%2F8ez%2BIl1h4qDwEfN1W2GVn3NKs8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfIh8nvxi8lRoffoyrcA9ggZNuyIp597%2B8duzZYSW1X36Qua1YOAxWvgGsGyz5Zms7Jt6H%2FQ7Hp2nr%2B9Ev%2Fx7UVHuuCY1qVEsfG%2FeAY8SfwyMwgo2Xo5cYRccHTivy%2Fe8uah2gcfFU4nyJjbuwStgj5ppd7aQOKtuRRr6AaJPuajQ4nfRRdlLldKJv4IeGztd98691poWUGfBx2XP2SJ1rL6E9uw6ZMoQmyztf4kh%2FxvpKOfxLN5POuQbubkadt0sfvuFO9co5Yc43m8Xh0y5kQ79CrNV2VEyGSVduFDvxgaAIkXbQ6VjMJ51euEDc9Ao%2BZS%2F1kNmyFJPaurv9VDJXiqe3whMzrk%2BLpSK8TWlC4ompS1ffybg5UnL48NthSwnDyCuwduvZdtdwhvWmGrb0uKTX0xtNaInqFRCWq0pJNaV9MS180mPYF%2FafnGjFSVJ1mcrvo9CyEnQ9ExMD9kSH1lCWKxN49gGLAATvKh1PD8ufBh4itIlXo3gW0oU8ab8c7lUYKqY5HqCjLyhQpCGHuWdQn2Ov8J%2FOXPaq77lHhYGjPwpZxSJQ8K1xUwudV%2BaevSsowekviTmZ537QIfplZo7HsKvAz5hNntAIcgV%2FgYaydZfgnWNqueVZk9d1T6zgJLHavKOFs8eYtMLWow8MGOqUBw8E64VIiSHJSMrEfxS9hNwzkLNCx%2FKTh3UbX25E7ANv3FpeKkJE%2BaVZyDoXUTOYNKqpFbLQTQNnDSNeyuxMNxhYP2T%2BVT00Ms8SD2jifeH71wspRztTCit2431W%2B6PIHAV%2FFbv4mL0E4eDsFM1jAPQ7WJk%2F4%2B8PmfNOsCbpVB7HFqdlv15OZr3szQZ2DWmJtwwxt9X6OZciarc08fKcOkZPETx1%2F&X-Amz-Signature=2e978182ebee1425afd428893cbe96675d930a9126784b505ff8788c2bd6077e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
