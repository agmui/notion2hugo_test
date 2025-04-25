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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUZUY34G%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUQFlGfNpmCAh0hgTOmGWoOLd1zP%2FCz1Fmclgi9zqHIAIgP3ngnGEgdZeE%2BWRc%2BTLbaVNAf7LJ9V8%2FOAfHKmmywY4q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDOufcTJSLNQDbml29CrcA9aDElroYm6I4CJm2uh9mNz6HIQAnZSnK43n33yexJOU%2BYEmsiPcnPLD6vl5YwK9vs5n32xKGhGueG7y8KDSznzKaZR4j3ycjfh0U2eX3H2EBYlcNWsmJh52%2F3xi2oNw6sGJYISRAfFM7oa2B98RlcC%2FvydPgAkIeQLFdvq7cBfn1PBjnjIpfztyU05gItg%2Fna%2BsUR1efCBtftpUAXwbvOjm0J%2BFkV2uTRBBmnoOF3O0HQq2eAzSch2XhgKBs7VD1rRlplZjTPOwVFBz48jtH%2BFs6CQs%2BggsWixWaTBcbEv5aryFlER5xb7kjQ5RiXSqTBKtA3wpwnqYaqYhn3CCaZilltV1eSqQNNZovpM3KxSNmtCzKlguGJrd4DQjLYQdZqUl79dHcvpugBBNxGXbpbHx1SKvhDrvm9IaVHHaGpXtSvP%2FsUrcfksRpYbaJ%2FvjRkK9ZKjxa5jzaJwyjAhYJNEBUEUPSG846f%2F8XUQ4LFNF77u6%2FW7v8mrQMR9R%2BGN8cv0zgQtxF6KYOYiVAYFpa6dnlqq%2FNJNQCJjlqstmI6gnBzT%2FH4LwFlrxf8EYjNWuPaPLR6mWiAh%2FgyHUocZIpYVgOLDfZ5iQclTa0tOf1kpUi7ObVNnEBi1NDGECMKDKrMAGOqUBuugW3pgkG1fBtPojxnxnrP6ZsJg170d4zUo1KwVWYWvhxy4Sl0cQUFWdDZo4tz0MsOdGgtMGR6xX8zJ2I0zNcZGBRURszorsbPNNuWAcEY1jl4i%2FrvcyMwiID7sALJh%2BsC2QqjlqKCDHEVhxfpNAhLc2qyLHMYb4cpG6O8uEETdyD59t%2Fe4Bus1%2B%2BWDIfFZ%2FGxisnUQsuJ6g7Oijj1%2BtJoZMlekL&X-Amz-Signature=818b69043ebf6264c2f01b618129ba1385b7faaafca4218c292719fbb978c5b1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
