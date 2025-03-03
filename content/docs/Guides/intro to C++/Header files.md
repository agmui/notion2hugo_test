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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4A543RP%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBI2Pga%2BfQrNoyncLD0gBzafI7L7Ocq8%2FXe1XcFwZ5XWAiEAmuhaJQPYYyIiIl3CdN%2FKDKgRnppcoV%2FS8rjzjEKiN74qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHY6C0NGYohG0DpbkSrcA%2B65eZRK771QIc31o%2BHliGdA4aQlv2Kc9fx526v8jOZdjOVzb0eWoauMxNJbFeAB4DVK8qLgJdaOthSEOLk0lzG%2BhetEnpZJLC0MkmJVGLiNOXA0WDYg1GAhfjkcUUubhJJmcAQNdMESm4Ht%2FgQvW8HanPX%2BTBTNr26%2FuSrxYNE%2FB%2F2xkh4iIw8%2BFBpz2a%2FG5NNhBDg8MMlFbNXCB7KrCgOo4XUx7%2B1NnkbwsmdZWysvCzMQakv84iVxWJIFikj2DkOULKPu%2FfhANdyqGS4oDQr0kmu8xk0NrDN7bPzBUZ4ug1NquMk%2BW%2F4Lqt%2BsIYCjOK4eGyBH7ANWxsz1zTslYq98QNt4xF0k9TM%2BAJwRB6Ab5%2FSf%2FFVwxF0TAr6X33ZXirwiKpNMzU03C40CeFpgZWFEnaG%2BEKWJK%2BxwU3DiFttNrFpqp%2F%2FdS%2FkiRlwsu%2Bou2AjWzn4Z2%2F42cvTNGV3o%2FfTQBX0gGi9AZOuudmfIvdLoCgRiXLcG8jba8Yi3EflCCp2HIDE74%2FuZgyfp5WFZwSAtSHvW%2FQcSyfjZuoWDG1LRx4UywKo4EBowiBlyIsjHITtr2oMnphHV8d1728BjvaNr%2B4DrmvsJxuIBz0xO8wY8fiePAUu%2Bnlqun26NMM%2Falr4GOqUBGyWAgvHF62lzPCmEoUxE6jmtTiEuudivR1lWLz5UtcUyE9%2By8MMLB7fvDgNtNkolHWs%2FLumVOPDm1saXFccGgbbZFuPgAemmqlc4O3INzka2DcRA43a0a3m8jXQqObSh%2FaqesBKPs7mi%2BzOwrvuTZEsEWrLTU2IUrff41sQQfr9JnWQGfcC765vxD3P3luKSVI%2Fxj%2FPuYZN%2FrZ5ieT8tEYeaSxFP&X-Amz-Signature=d7ae0f3f552fb31c6364122092f0b3aa7b4087b1d7016c5bc568bd011ecb5fb2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
