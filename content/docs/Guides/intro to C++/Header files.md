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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAZFU4QE%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCWEpTRu3oEViL1uG37hPk8WIGm72Y%2BzE3AXUn0Zj4kTQIgSD%2Fv1aS2rSmwn29072YbKMJbmvqWUQurFDI8n%2B3WVvEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPZea4GOQCaUnNzMUSrcA9bUnJd6kABJD3O5vtG6Aju%2FQqqyVl5UlXF7M4xcoA7EPg%2BWm5IxFk5bEPegzrs0YYhP6qqGYndz6cUEMg8mfj6ejE3GtcmwcxPtF5QblFOo7eRKfkNmKbMZX%2FNFnuNXrg5%2FReziUzZTJCf2qMyg3LYjgYRRb6gTy7eK4Kn%2B0YbeQ87uRmoWMFBzOcQm%2FbhBSneyt5P43nRvQu3wdhSEbjmFbsqdn%2FED7pgDGNLo2DsUdjvMY0c%2Fx%2Bt5Nwh8f1%2BkjgjaZddSfj%2FRkNenYqvowYaCGZsQ0rwbsqb%2Bd1EW8F7%2FJjHDxZ0Id8kMuBo%2F1iZ8xiHtWfIxU2CpYQ8PlOv7L3MtXEbCyIQHXxfcHQOnyM5j6xk8VucCE7K1STV4Y7PSM5FfgJnZ%2F29GLpRnRgaj8cqnDAwPsJ07LoZ%2BeFSR0Cb%2FCwUV%2B86FU%2F9n5CPCNGcB8YHhf23d2V8ewBBaKkSBRqNWqOIJvtPn7jDGU%2FwFMdtNSR8VB5TYc6FjpPecSARu6TM%2Fv8LUcxTrG5DvBfhxk8bFuRPaXi91jHtcky0%2BUoGeeIeDykfV9sIC0n8c8xmBPEFmoFq9KfbRnscIua3LXtHEMkLRIwpZl%2FL9yYMKDwxKBjJD7aEhh%2BoThg2BMMSx574GOqUB0SdyzgFJksB5nQ5ieRmdBDLGaDf8LylBkJy12Ta08kHuJg4smCIG8E8IwSgYLCNKXFOT31apFSV3bXmYT9AjADBBzKuZoJ4sKVqISUcxen%2F%2F72yqaNC0Aqq3k3ouTM4%2BV0R7VxnDQXmjh4oPIiXmw4qQ07PeoOabT4DMPziW97Mi5RX%2B0p6tpzD4V83VSDATsC5lA4w8lKSEZqnf0f89M3Mn9ueb&X-Amz-Signature=bdee7c9b8e0ce5a30a70dbb8a3c61d51c274e37f70cb0b9552c70baec2b92dcb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
