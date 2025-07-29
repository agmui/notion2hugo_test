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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJTOC6SH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCV7Q5ZFHpS6zG4A%2BTtyBPzU4CJzkwGjcfWbCijrWuIfQIhAJNj%2BqJ8Eo1ijiyvhUO38XrYLq9B1GLgd4y3GdzWrp8qKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytVv9EEn7STc6rNOAq3ANxui%2BpVBm5XBkm8nVAByZZjL%2Bot%2FPeT9kLPnnwKfHM0OM7vQGnQlToo5cD2aBlM2sOyCWGbhNn1pzCZ7%2BCWZZM7FGI6e0FdebmFyN9RRZwKmZQ7pUY%2B2wCekXl2r99Mya3qiUPxDI6JwiRT4kp2m2tvoJ7NCCnoJoWM83GGaDMS6cr1hiKg7z9djSfAx6VvA0XBp3ojMqwAWJqSGMwUBVNiYFSNiV56F8f3xRbc6EvJyrKLxc5rdd9bJCm0FgruLzuNnhJdcus9LJ8vvD0J88HAOyubdG27diAmXwtcpG8QfOpGUjRzSLiaeHIq9SMQaTHAv2t1LvI1FAfg62bOWmgeIhL0faDShjaeEsOB0WaDPu26i0iTaERLM6e8oztXv7WiWuxJa1R%2FUvW0m3ERAhpoUXRBt31jJTbTc8TQm8DA4VGB4wmlrDiJjwW9bhnpqqbiPZcS4JQh3DYGoYvTLVOnbh6Jw07LzknnC4k9%2BDP%2FECtVC6M96VsuPERhU2vnKcflXjgPvTgKJRA7wL%2B%2BkELTDWMoIGLBlELt50taRZY9nfC70kZncnLCv4PdLArmJbpMMu1EUEgBp79rAz8OT08ebu9MhRztenyTRVj9oouxf5%2BT%2BvEeiEgIRrh1jDMzaDEBjqkAREYzHe13RAVOg0TMPFJqmTV%2BL%2BCTbmMg8sQUTkcvNjCBoN1dapRZ0noXBX3W%2Bel5FXsrQ4hLdXotEWeVGvdtETwgdcG1jALH%2FND5fYqA8%2BYo3ppil0G7kWOplBdjh8W7EB8IR%2BUGlZRXPHlT7aOYgEyVzJ1vsZ9dZB06PluKyyPP0WHprlGaE1A8IKEGJvMKum1qLSaBvBTqfYOSy5ItMZyszIy&X-Amz-Signature=037f842bc50b58335b2b038dbf44ab80d49126dfe96aff408949e2155b0c7bfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
