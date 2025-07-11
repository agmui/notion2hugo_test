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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKDQSDWY%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMya79yTLFDmHnl3uMJlhDVRjSLhmYlYCLpKM9efirFAiEA9Vp7cN%2Fs2iU4GUazyb4%2FmT7iq%2BADd3KvyNcF7RJQFTEqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsdMsMMOKWpkZW2XircAzYyK2QckfxusF2N%2B6Bpi7kgR%2Br31Jd0UogtIK9Kp67fjlA%2BqCe1WQEOgWvYa2A07jxaT8E3jtqUsdKGTjS3IKyNVlyJ8hqtcmy0e9%2Bdt7jmPXM5AMcEmbDzTJKd3IUYh6F35o03hWzCGA3pzpFrdR6IiQfwO1ho4Wzpt6OuuoRtOnvfwn8Lp9vMMgSl6%2BpoKWn70jwLV3W0rVbMJYcNYA6njtlWaQsVjouEqPZ7vdP%2B%2B24MM7U0GtHOYaaG0SlPeLMx8aJCvxbZK9mgmurPfaAo%2BQzBCWYget7xjh%2FRr3WifrgRhWhXf2ATnhNItdSZYe3NdFvw8Yul1XOfI2AGqfmSH226T9%2FIFVfuNa%2Fr2qYNvoY3key8BZGkyIoS2ZDPvwKk52uXZmdwir6OUmR9qawG3hluh6CSgDJXmC4Z9b4Sgs26%2B5Tz%2FmwIY%2B%2BZ1tAp%2BRWhCmZMSHjxRI%2BltG%2FjkHVEGNQKH8W7H5mQ5DZh1%2ByIiA6Yp8ugdOgseLj5%2Bypc2AevLNauOeJESKMuwBQUreSkP4ILkQAcNbsP75tqPIdwNJwWh7MwOtBubTWdlGzYIcMQ81h4wBv%2Bnsdnv7fsn0247L%2Fd09glXGCMioR%2FObVKa4ewKzv6x%2BGw%2Baz5MPrSxMMGOqUBXNVlxHIFv%2FpayCHMtdZLwmVNgxSc0kHa7eOblcHD6MXOOAvFjIG%2BPCqQAj4udfG%2BUU1I0VAO4UQs%2F3tsRQpuRgKSgAcOG0vojp3Xnp3PVKYFc6%2FDkoozL684r1xb5yW7XW8xEY69SR9g5Vmeight14CvTLtUfRIQZ2PngsOa8%2BQCv5AfJoGKi7xu56voDWWrv%2Fic7bhv1PA6FxhSqOCHOgktRraL&X-Amz-Signature=a32a520e0be11984c0cd909f66c5d3ab62d737bbad6e7e096f6139172eef2694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
