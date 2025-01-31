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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XABR2KTH%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwzAW%2BWvOYgsL%2BUhbqyiUhOBQNfW85qDDJdx4jSOkgyAiBpsV5BfeB3m6lLIMRdflJ6WgCeVgDMfRl%2FQ0yfrSNwHSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTaOISZ4sy28JpCnbKtwDWGdD8w4oWPwBfuil5rdzv7Yjx0StwJjYjji2hYfqycTUu7HiUBMGFGH5MX%2BtVo9ByGAz%2FYUHDc1zVxIYaUwn7MJ%2FBgLvd50R6hY%2B1SgSgu0whify16ekbpl7T3cbrWTUO%2BQjCUQmYNZK3KgNYAE%2Bvu%2FvgpJnKhn5Rsg6iVnjCVg4MoyEOvkvfaFK1ycV7r9uMnQf9a1FD94Jp5MbZ5CjM%2BE8hoG7%2BocR9TSmiScoWrGKruGL1pnYzyZnZGyuNhUWuYtnT1tCmCNIgwpV8B1m7vjXXnAzUJaC%2BmJNn4J%2FyoIseuvqChie7lrY0X%2F0ZkfBPrVzcQmuntfu3Ky6LxFKvHTzpkT0U6lx7yABJnSWMovSxCj%2F1ZF5D15WrKttP1LXCcRMOMMhwj%2BPhRtxx6C6OoTR2aTWuqF%2BGMLCF7Eklf8pJxAf8GvrGCjmd3wTsyhEGMILDvWgaQDMrHXSKlkkvlZUORUuUMjl9ipFn%2B32tvR%2FXLVXuVEw4lloCya0p1rHBJDdoKc9RaGXC4So6nLR0%2FmTB%2BSIzJ3%2BNnNmcuQVnrbDcmwb2LpUmAKlQk5R6G3yIyiY19KIr5L9d5v%2Fm%2BAvkAoAI7AomZ4UbDcksX0yzT7zI9Cv%2BOAzrw6I4UowzdjyvAY6pgGksHJWJNRpANLB8YzZC0qEehKGP8knkGKEni3clL0JI3BGHoSorlvEKASBY3yGx7iw%2FCgilU2bU6kMWDMNIPMT9f5NmpckO%2F3zUfqi7trrVCRYbZ3d6uqSBIKlIbMYQOBNJiOtXG%2FGzkLi7zLoSngGbwISSGEu5OikWWX%2BEatiizPs9GkPj2LGhdlk9ubwgDGbcZXw0IFzJOOqAMmasE47Z12B2WIQ&X-Amz-Signature=ec2acfc1048df9098e77de4b473fed2617898bc812e3becef340f3b0f1261923&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
