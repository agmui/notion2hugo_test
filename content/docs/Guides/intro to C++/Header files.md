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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634E2BKCK%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR%2FxP%2Fzo0PsDnf6ZnUqXiyx1s98RVTYQHKQuhVCP4VRgIhAIhP%2BNLTr6M2x89MD4VZQbTfab3wrVBg8TZF3%2BQ6En2yKv8DCFEQABoMNjM3NDIzMTgzODA1IgwGFpk04v7Z58Gv0dkq3AP5Y9DlFdNUldccveQ%2FNyZ3pWR9VBVe0lDgC%2FosUSg3wx0e8VXePA4RhK6VDDL0fjaMVd0wyMMOaSxWmBjhL89gX7DhynzSYzguvTkgLduaHLElZFjkil%2FZrxFu36ls25Csc2sBB6fR4hNgvqAPO%2Bzhn%2BST7JM80%2F9U%2Bs4ZD7TxnS20kKXwu9Wt0ytmq%2BC6zl7mg8MGiD0Sdq37V9hew3w%2FfvJNjmBBY7Vnohea3REnmCc%2FIfVmp2l6KFX8opAhD8%2BYLLcyiN0NVMmZOyUyajXdPvyYlN5%2BKh03%2BWs4fnC5kPBdhq6DY0RRgFual%2B5NoVxcfMREGg%2BZU3UpQsah89GiRnrRK%2BBNkFmRroKFJCPpFXhQoB0qDAN8vRDD673wFTYCuX3Ke2attK1X8XlY4XmTBFqPUvMtIyLH3Xhb36ii%2FIpJVN3ibHw6kEw6MTVSFfhcYKCIPatiSoQJ0j8PXgK3sGUYDqhgBgtZxFPKI%2FM5TavZuYE4Rl6iZs%2BDNgayyB6W7d1EWIN3N2XQ%2FGazqh62U7ZBUBF5ur8zNzbn%2FedQ4xL3WRpUJLu9x088dF%2BR9WFyiW3qsMfSe3ge5EN6ulfqRKi74BkIQ%2BaRF5bxLupKU67BqSN83jjFMrAjIDDwqZ%2FBBjqkAZow5A5jtnIhN9vJkp1eddrAKU8eWBoY%2B4bwd8D86vwMHutHihQAz%2Fj6V9FXMc4Ly7g7rDIT73ps4Uem5RhA6eMQ%2FGykqu3DFCNE3UpWXYXp4hPNYfZPJRTcxvDRm%2B5Gn8JcQQ%2FQ1RlH%2B4NImh5Syv3w9ELTCOt8sNG4HstrRFOvqvbCUNR6ZThk0wtQGsy40EsCkqtQ%2F1K2uisIBhFudzLRmjMA&X-Amz-Signature=8cc01254ae091fc9c5e1bfcaf00a66194a57db0f32c42529e91dde022a77b229&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
