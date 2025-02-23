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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK27EPI5%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSGnMRb%2Fe2Yq8ljklpRf2UQCjDv91bH7Nb%2FBgm5e%2B1lAIgey%2FFjDuvLUt1Wrv4jf3Jh%2FJZ7mYAGAiIkk3RDgMhKvsq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDMOYpa%2B6Tv1qYcJb%2FSrcA%2ByXCUgypAM4q8YkXLzFAxrZn4i0W%2Bi1J2y0YJAXlD6wn16BcnrOOF4dNo4NtIM48zAN4DBqA3bKLTOrj3hfrDlqp%2BIr5C5K%2Bc907bQV7lt4CPNOJW%2BG1eFjMurgWVUAKV8orA4LMFqtZov5rl89XTPkqdI03Nu%2B5%2B4UDmqYxtrSMlmEb7JZOmsmm0g2n1OwUJUX6jj3bdDn9m4Q%2FizolWFmFY7Hg%2FYqfuSuyXtgnwh%2FsUGGke%2BmEiF%2FD88bVFMtOha8WYXHVF2HFCfeoAcPRJiYhtVyI%2BMFgT20E0qqw4cFMWHhkl3c7w3Q8rpENtW%2F%2FfOzGS%2Bxd%2B37C%2BSQK6LeurtWMBgYubfVcu1Rs6ca8z1B7VnuCZ1LnakG3ed6GTcXpeEpfj6m3Hhbxh3HIvQZ%2By2mOuMbQB6cHVVHxwCuoR9XSjIvMq0msHMpYlgJj5v1uOrU%2BRZHVa2v1V2ZBE1lGFvBr95NpGldtafeH6xz2QfVGNG3h0DD%2FflmD%2FFRU4hMVc9wAaq4h1oAkAcTw6xSKunufN744M6ZeXLevLRb62u00nf3YbxtbOCSI7A0Uu6gjXSI1OdEijInHLboYvtD%2B7ynSWtbLuEFuZhEFg96CgTuwSMLKYLeFZvOujCDMJTu670GOqUBQqhhg4aR31%2FpRaIm4zKT6ZGZbf6CBeRbAJQsn4ZWFVgJIZAgS%2BZIenyqe4d4x3j%2FNaqkXvuoX2dSKlzfzvLEh7QrhDk67hsRqc%2Bb8dcTpz12OsHGKyfYrs3jBEcutFOj805XHU7ldQ59Sj8W7JIsTk130uIOQzUE%2BbPM4RwvVA74M71Z8sX6%2FUsWtYdRcLiaVjLlLEz0NVmXqJNIJvZbMM2Sh0cS&X-Amz-Signature=ab58b9978b0021a29ab4669def2729f41fb91aa38e085b8e1b915bd78b6fa800&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
