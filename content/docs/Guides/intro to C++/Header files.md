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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYIYYJCN%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEh9MUIGmFGO9nCAXlYlQZRQhPVMFJpgVDnJdtFAsQErAiBiWrfwFU%2BzyGt%2F4EC6Ji%2B5yQR6WhJEukLyN6e9bf8XMSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMztaWWl3dnAp01rRQKtwDnU3ya%2B8xgnX94ahPU6kgpzZSPuS0j3%2FliYmZzvNwxWcvhwi2Bw8iFVw1kHxNm0ul6bk8KUL3xquogPUUIFLsFarAcWYMORsPDCBVXZMvBPwjV3hMxIKRutQdOkd6rhY4csVHJ6bRSOi8JSt06nB6SxKEhPb%2BERTT664sd15sGSkMDdcn3jHK2tmvO81Bo9G4FcU%2FWL48MHCHgBDsqoEw%2BIJtfgfdIkh%2BSG6j9RG7NapfS9z5KBvKVqWJnpmXseeMvYmZZwxDRngbUFOhhKTGz3CDn8FX%2BakyD6qZtY6iOlKGjuDza9brL%2FVTw%2BBXJg2x09Dpa7R3mJtb9vK2dzmnoyr7EiETuMuQfQTwy0frMceJVip6rB6w2kbXMkfDnc%2FigMe4%2FQqHuoGAzlVvZIEWv%2B6YpsdXxvBw8k5WZ0dsFFqJohsxd%2BxKrwBstyXJSgcSBvExA0i%2FdW1xqixyItUO4arqlT0F8X8O35upzcNsaqGGTUM1a0xAcCHbIaWQbb0VjY5AaUg1aOB3fYi4Cb3SPtiRkrP%2BRpETBzmt%2B4JcvokVkBTYBlBulveLuVJLb6WaP%2BDAWyfLtivuWyP8zVzpVaIaR5b0KBNHm0U98zyBpvydH4GKUFQeGdCe7Igwwrv9vAY6pgHi7eerMi%2Fp9UtjvxwMED36%2FRq1dmRDVz6h6bZutfwa%2F6XGaDaqr4fBqhFJZNfxjBFpv0usS6FSihKdR2lp52SlVp3NuMBg7VVobmApebljoWmPlPvW2%2BzHXOjvwBwInN67%2FKn20UlABtnboCLWvKEClcgxAqvNnVhSlBcjm%2BmSH9QbrQpRfXtCXmZMZeGMmP4ATR233T1gZuQ9nBqs937plT0AMYhB&X-Amz-Signature=4479a86504714425b51c82f56ea8328f6e1b8eeaaf14316da960e0533870b3e0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
