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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666JKVFF4%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIEEDrw4C5mBSfnmGSfFGUK1ThS%2BhdZj3dx%2FGIWWtx1N7AiEA6lUxPT%2FnXXA0xVQejyFZr2PvqStq1hcMUfNJqiFK0ggq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNnXPat48ozhjSYzmSrcA7%2FpWJ9rNNwwYsi658szpljM9EH22FLW4HAOlzb1NNzb1Iw0V9jkiz9jKYsBbj5pAepxhx6DCbh%2Bt4jOYr4mOfRcaVqZ8wyWHDePXvhpMdAmYAK9NOG4zrMq%2BmZ1fgmqQCzsZ1pt2jJfvJxBLbFwesDoUzgvWCqccqJSHgqa9OW%2FqDYXmqDdr5uUnex02w2JEKjZ7UqlUrETYq0KdhpR7DxmHWQRQxnNiAtCwDoX3%2BgGw7L1GSI79Fl3qtSbqU5BeY%2BoHzOoUVaD7Qa8o17tH%2FmoQ%2Fp7pBByutl%2Fypwoor71PFZl%2Fp5HxWqH9boFsvcs0vyHVrQ0UtP1rnSMSqcUzVEXGZ2tKy1f4UkGEx7k6LbxdIjAMSPKEgaXNXTzh8GS9C78PdBZiskuVHj1cpqHYH2%2F7WOzQRlzc29bp8tW4ULi6NKZvJgWUbeCFM%2FR%2B8bm1MzStQvIrco%2BV%2BRF%2BPYI%2B9IvaWXs7kSQdRU8V8fuP%2FxaYQts%2BkpZa8o3arlE3RxUc8rVwb6QiFnMB7TNPjossxneyesp5jJJJ8ECfUHa7aLqcA%2Fc2fniAyo6mgmr4ik0sNgxRW2QAW9Nzi%2Fw3o29gcjxT5z9kIKhuNiffF7Jm%2Bo9tE%2FWYPoC%2Fj1vBNHFMI3j6b4GOqUB3zaC45WobVFbwPI8Hr296QuBiyv6bleeFVWCWxGWlk186VRl%2F1EGMDs9MIHOs%2B3nyIItN32feH8%2FzmtYOoF8XNOCJqOr7SYOPLrBqBbvMqY%2FZiU2A7Qo0C48IZ5eS2CU8foS35x2NrOAqgd4cnKYpeYgMjVCbycoCXPExyhQA7UPWJ3%2F8%2FO9N7UgD3DViIUf5e0QIp0XuToCIr5BzEGpdOIih3KI&X-Amz-Signature=5b4a19f048a028c80f317d5f2b4b0d4c27a7e96d53de90585f5eb8511898f985&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
