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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F2OVC2F%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIFk%2F3WFMMNbgqUxLJiD68j3zuQqSscwj%2BqtDBBSWQUldAiAU3nxrUUC%2B%2F7MHonY1Aioh4MakmgY09fAswiLLGm78RSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVydlahZG8541VvBRKtwDWxyAu7KoopGd8bCY2MW%2FbZgf3c1Uh4exW5zW851vIK6IQha1E%2FLR%2BO91z0g4QD4uWV4G48FnU4hpYfgaYHmzUL3cxBMJAMuYludF%2BGHXdPOgBDVQD266PuQbBKG%2BDuhFIn9PmucwH8HmZU6DDE5ZXtJCc0kwbrXZevZIbwyhQF21BtXTCaguZ%2BTmFvxqd54r1B6vRil6H%2FucuMD94feDYSbmTXtXsLNKqwpok0FGzC1c%2FlENfrH3ubPaj4iWWSFo7PIxnlCEKjQgQy%2FDeBEmlqztxIobiCgbImbxFJVDL%2F5Z7UgNXbfcn1v5xOA01IENu%2BHt8asabs0NJuKjvbdEK3K0B5AlFUBTXiEtRnZ70z0ieFmuj5n40DlSJwdF%2FHmDLzaxGmFwBwycdYWLU2ua2lByormHnF621FD4Guq7VqaIIaiBV7uNasBIuuHGEiiMxZ2kNHUzBapqo1WoszA%2FimNXBIYN7pmBwtywJ6hDzVY2%2Bw9RZJru1ILdgAJJTj%2Bi4kD4nnRCKPQ3EDifE5B1n36N%2B%2BoIfjWGyNZ96wQUtWaGbHDTJvR06gylscDPIVi6nsW0b95w%2FEtZztDHB3HeapVSSJehr0wcQtVoTkNLRaD6ZLfiHhmwD7ZJhmsw5uG8wQY6pgE39Ypoxh4OrEAAyZfP%2BErFWKUi5AhlVmtVQBhwTE4tQA70dSObhx7Ipb7HpDO5y3mGmmrq%2BWbSdvrRKOcIKwp7Jo6O0kMEqJAWCJ2vx31o87kC3fERMaONjPd3nYcb9hUsCug%2BPN7du%2Fh7d5Eb5YvdWXVTWY0OxW6VLJPLz4ntmMbYLpYUjtwpUMczefKE5%2F18CnSyG2ynVC2skCXqKdnTrFlRFEZ%2F&X-Amz-Signature=92f0c242294d2a16d70d4b1cc30217fb0346e1fc902c0673f2e6a56b4da13a43&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
