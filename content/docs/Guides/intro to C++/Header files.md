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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3CT44DU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhgUIW3OR24EcU7LH0m2A4S3XGaVcj3URmhKGrTjmQjAiAJBiUCUOKY947Iq%2Feo1Z5oHeeryg9M7cDaj7oNnyfyOSqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6oyo8N3zLutR2fgCKtwDJIjVcdkN%2FQoRumUyVibGXes2zWrrVoxhRmozF78901k5pKkYG0TBqM8W%2FvzGf1u0hi%2FiNh51bsDa6K67XUfX0bR7qbNPLEE8f%2FKfaYbRIElj71NJl7gbv%2BGJu6olR%2BE5r96xZ2rOnNATkOYF6yR6BGmmw2%2BGW0J8M%2BzHHFd%2FpC%2FBHV%2FfVhyWy8JWSsdfj9h3Q0s%2FQJLRqjYRicfbu%2Fgwg549rqyWPCc9FTGFUmyxZ9JLcRvn4fvmJbOL7IsaQVhtYOzJiX5OP0kR1n0dAi8rYH1idyKenXFAPgarxuTFfKREt3BnG%2Ft8VB2E60Vstg4kEyq4G9%2Buv0uGmUePjKsr6cYKSo0egoo6mYB3U6e5PAr2kP2l2JnFnMucNwj5ICeF0Cmec8sKX8R%2BRpGBDJK64hv0NLbxMyzG46YQ47BcrIHUR2FcymSd%2FaDKfSypAxSjOlj9a6fx58GYhT5lROUSsdbw7Z%2F4LE2T9gBQpKb%2BB5BPd3%2FZ9eoJ9iqnBx3vHmJ8y9KdhUNGVgV37onG%2BhwxQK5iDdHTjHryGskVvDJWJz0qDdVrAsxcoDJq0cZTiMfRgWKfANsuPpduO62wbHodcMFrPsQc96WJ1h8r4NCbjAuLxDs8BJ2E%2BKb7UMsw%2FJOVwwY6pgFzSgQ2Kmh8IOp8%2FYxKHSCnIEQWJm9OICEWmtRo0v3i1VVrh%2BAcjsnPKfPW%2Fy9PruahSf2ckMUAFgsicpMCJ8ZmvL9S46X%2BVcbCTkusRiEWgG9TSWnJbgrczMC0hefrgsxEH1vfrSI49VPpKCkQPUfLP8i5fjso6hMOfZlO91WhYHbr6eLYkMRpnFiYSuRUJZYx%2Bx0g0N%2BksMMLNlZg0QYMEGa0UENn&X-Amz-Signature=390ea1a67b15515f8e51993c17060fe33e2ff1a70e198cf13653409fa789357d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
