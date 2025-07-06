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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVKBNRPU%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIAPPGuL23HvdrDixNPxMLvAR1yuIo7gbWR4uOfeFVdMaAiBRceEu18%2FItF7dCCujgZsze5mNbgA1mXbcX95FNj%2FyWSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMPvATFzbssmsc%2B56fKtwDReMdwbzu8GTYxJAVu9p3KqXX9K3FMNRlz%2FOMPB%2BLf8dIh%2BAh2MC1G9imM7AsTGcNDweKmMSZFCUxCmHiRSamHBLwigVb46yRNebei05XLKzTo6nRFkrPCkJjBh5Qo%2BJupw9TZ%2Fq8T%2BUvdVMQXe9wisrV0RbtCxhC9DrSdArZBk5AjaNcDiiaa%2B6%2BOu6ROdC4isRMue6PB2hqqa9aDbw617H%2FzK6AEYhZyrzZVR0Hz9lnVPjba6tIUloQBx34K%2B6CrNtnsvCoDI7%2BahTzpriURDTZMOcM2YuH8wGr%2BJCIP7oLttMa8nZ31U3wwCX7Ss8c7iuPSUy2B7zEYcBOgIIzpEHzObI9ddwv2xJvJ%2FTq0HyYi97R%2BCHXogFutQZllvwerUSBuR3%2BqYzy%2BCpSxLTz8Hom%2FLe%2FvWxgStqVzjF7PG%2FIvbyiFLBbNxpBfkOpt1kFSdXTm4Wgm08ycZtBtAPVnXT3iR%2BaeJWW8hrISd7VBdId3U44XkbYJsav%2F8OeuvlJjJ3S6qLnJ58McHS937WpRXkDtvDamD4zMzG7RoQ78pelILiQzVNBm8pXpil%2FFefQ1%2BZeUNV%2FvZJQ5W%2FhhJTw%2FWH0rNLUUoyVyB0MRsgmRyTmT7TIuCfhdKHULLEwhtipwwY6pgFkodUbGWqz3lEx9V%2FZiU3o4BitK4VeDmEqsHR6UOVeC3DjxvvNv1merbanjKpYSQ%2FDu9fButZ5DS5OwljWILsbvIehkyt%2F3LDPp4zT201DHzeUbnO7VF%2BPqV%2BtlUVJklwf%2Fke2qe7FmY4BaUQZC2jpuQ8b2mXkW%2F8A6HsdQIVfjmvbNDoZa7FHp%2F%2F1AmO73Col2DVKqPz9UY2hw%2FMscx3i3V6jdXs9&X-Amz-Signature=ea63fc17118582a53a0c5f36e7da681f082c56ed2a130d71e00f50c39485b793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
