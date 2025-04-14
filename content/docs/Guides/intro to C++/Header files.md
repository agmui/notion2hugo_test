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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZHBKCZH%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeAwf05Tyx0FCHjADBkM3EGQ1rpSccgLI7RScTZalSrAiEAj75iJnY3wysInm5z%2BXgohMFwQa1QDmkvF3cHih9F3Lsq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDL%2FXpcPiQ5aWH19cMyrcA3nrq8Z0a%2BNv6fNsqu4BJwF%2BmUjQmZ2kYP2ff9yV%2BS2tyCqaOdkQ0yCilY%2B7FvpS8Bm0pVsDwVpiHFB4hr9ymKIfvkntgTUi33PCPHvqsbVRnPjwOTNR06MkOBYPlV1BwHHckLWFJ%2FslhfhQhiYoHKS0ZreoL9mbNyT6bmsSJxhR4k4jvyaVytG%2Fng801PkpAjgMWhmnfXdZJNeypaaNnlZ%2BGQqxl1P6pCrLYErYk%2FBWDXF2FapnDk8BfckSbkp5sRhcVzYlj%2BwQfX8fO36PRismn2Fgxvndb%2Bt4yyxa4%2FeNKYEOwH04Hiz%2BIztsuQz5dAwEgc%2FGcg3A7EO3wFTy2iL5YHnqTrfhLICgXA5xqr9vJ344FdrTt3z217TahgmsB%2Fiv6SW2At55joXMYaM4LAR%2FbSNEeyMHJEestDHpjmaQ%2BxKWYzsSG9iLP%2Bw2J2pvBJtO%2BUy0F2kG6OFFWBHZOOdtb4TuGeoOExNCaWI%2Bu8Nh3OqvAd2OJYpf9tojKCq%2Br6JfWOY3n9kciSfP3o4UOAm%2BQj9xeRzHC1QMXevJh32fmHp2N1lzXo26cpV86wTNl%2Bg2NZXlE7Obg%2F4qYjjCmEZIkM5tr5%2FCoVBogrOrhp0pUu4xYa6lWZzUeCK7MJnA878GOqUB%2F1tx73Fa9mykRyqW8rNKA%2FfXPXOYJND10DP73ewgj%2FtFIQKmUZ9mQVTPUxSWHv0JsNOXRQdDfvQ4vtpG9OhVKMPxHD7I9xtV7eTGydusfTDu7RnACJGGQtxrwQ%2B5ocA%2FzEdZwDW4nseSLI%2FakBExaWeD2yBQ3z6zelBsJQjNO5qpkLZuDmPTVobxVHELv9uTh3SdDP3kQItZQw9AOEisCH85zY2J&X-Amz-Signature=702eee7f379e31a0a263f0073c2eb4703d175774bf5df1fd5fb4fb4748caf55b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
