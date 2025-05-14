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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PIZXK2D%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDzrTHuSlz79QzhPhJEw5XhoogR1CYYEQZ9o9uUpg6ybgIhAJfuI6rJlcvsoAeFyseXniq3USTwPOxOIzW4drqkE%2FmxKv8DCBwQABoMNjM3NDIzMTgzODA1IgyXk%2B1BV8DA9jNR3ycq3ANzES1cqL7%2Bb43OK5gGjQjzPXkXWt3idzP0ckOw9IM%2B1rF6%2BwJ7d7PpHn%2FYpjXerefaFKuxqf1ykl3T3OpnZrcvWXzwWxB1Vsm8rnx%2Ft8a%2FxJ%2Fm5gulEifecArWH65HBj3WzzvfWB4qecUibA8%2BR3JkfL6Ne76%2FjN9KYL53Ab%2FePdfBX%2FlVNGbyw2TS61w38lxus6x7K4iMHen9D3CaWUP5P0L1fPU9sFEjM76lx1wE964Dp6zA3jpiUpMmqnwE3EaoPDnZ2YORO5GW3ovTfdFFsQEzXq8BkCSqys0APyp93QYmu%2BxAXmryg9kfDVTlYdZkUytRU8kYVU2JdE8pTc7v6r95haNNrEBdTkhXNVsnk4apxdVcScmLAGItcZALsKTrtVhmN%2F8uqwtda%2BDy9jdA3bHw%2Fx0veHLiIJbHp24Gvxz51vOlniyr0j7F%2FzOqUPH5H9%2B%2FAOizsrmu2PRXilqaoOrElIvWueIItg3%2F%2Fch9Gl4bGpb3%2Bl6fhutwz6wATw4mqqxrNPXRCIh7%2FxvJP17Fdnnkbz6hibDSAYYHmKhho75bI92HT1Uh1GLu4pJUvSj3tkEXaDEhxZfqEQKZnPNDGy0UUSqvyXadCoh8IajKoprrQgVwRVX70Gi3NzC7z5PBBjqkAarSVWIigrQljUZFj9KlomBldrJ9%2BSMEsD%2BeCsJjgjDpoctH%2BnY%2FjEgg9X9I4O7ewll04Utm%2FL38kSwn8V8Ecwv3%2Bl9mtnIZVlJkia97owYKEM27nUxgdn1qWCoW%2FyImag1qXfGj%2B%2FCM0puqtfS88ru%2F5AnJtWz0ZI4Zmkn3R4R%2Bnb%2Fv1UA3jcM6kX1xszo%2FK2p1QRQkwwwiPhFnf8XE8SNhCv0J&X-Amz-Signature=44033adb4e18c5a626072642ac4a3e552f70e9dd7b5e5c68433bf1f2ce82f594&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
