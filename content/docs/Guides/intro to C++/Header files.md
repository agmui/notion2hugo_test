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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KOSYWWF%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcLBLBA1JL2FOO8aFirej2wEU%2FS41p5SgFpWpFNUK2eQIgfawgrm8SCnauwOoZ609fDH3DxWz77ni1zviAcrfIfbEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG%2FK79%2BXCPe5XL%2BbCrcA1mXOsS7BB7arW4yefeZ%2FYiR0zMw3KNqUx2W4RchX1Q1BP7OrVGVHKdXd8bY0UVVXs38fFHHXrcB%2F8f0jvzMhlRX%2BDGXyJxKpw4Vg5ytxGpmfqtWvnYolpjGvVDHwbsWGN91uVBqTGG8HrnyDxUW2Q42Tw02Fip1XtEwz3FWe2wy9YS2ekvN67zdWl4lSXGtbYMt95YtsrsUIPHQPmL1Fl%2FOrSvF8FqZnK%2Bn2LodHQKB1k5g73e%2FRwivn6ciual0PwNET2XxoSoeNd3P04tdO2DftVgQ%2FBq8BzOX6u%2BpASy1bC9pjiMtnCBWNdQzXSuHVnfud7sfhs2pfGUCIAzZMWtdcGh02eDddpIXHbJyfhJndmn7fZn1U42PFEOk6RM0%2BaZrVNzcVAZKqFp%2BofuVjRYv82Jjk%2Fzp476qtuZLXkSy2FmzGWxo95C17BWCNkXrtzTMdSg6QRZk5KaYdhyABTgz5ffp5bhSFRihm6xXnvpSQHe6Yzfb4Xev2KR8yPgqqA3FcMxQ6QfU%2F6ReFgg03ObYXxTL%2Fcgq70FVFutZmS5JCJwPQ56faqDQefm33OxHuGjftVZLG0Bjlr8fAb4bFxM9K2eXbF5z5O%2FGIpIyg53M7c9LtzjY4Y0OJtFnMMCT98MGOqUBwoZxfCJ8lXQJvhGLj1v1Y%2FYT85V2yThPvJYU1rSITwrSQEiaVwrMgf%2FiwAZG8QXjq5gkB71jWB4qXvVwvb%2B%2BqH65hO%2FYnaRf9LPhpwl3smO7ZkDRCc5Vvx6lMkgKlhkkO10jf7K4xNCJXLy49nwF9uU2uPd3%2FHYf%2FL8przCCrMv2rrV0SPxk3ot1U9wCKndwY%2FU8%2BwCP%2BVO%2FAXY8RhIapcqABIj3&X-Amz-Signature=2f071257ddac42a8df856f8cf28c014ee89f2f1140ff3ec35d71f0657899a300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
