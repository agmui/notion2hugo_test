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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUGPAYTJ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCzybH0RVWfBs%2FLmg7Q55LsGiDgU7fhQTp7a2qshXjTUQIgLqyzGgYKej8RFCO5bVITm%2BzX80s7Hw5KpCflBZdHkIYq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIapgyiHhsqN31amtyrcAwEAjTJX1OPCNvfjiaF3axqWL6thrTbnzpPxcSAkV60rVxTD0KTRwVhtTt%2BQjoy3uHuPwRqseWiaC3H1tITCjtIFtHupXU%2Fe27U1%2BeDIbxDDDhBUijyT75uECgOTIEo2hJ2b77aGoIBNsYKP%2BFYMO8ECgbTK5QUBcV%2FVNJYiC4FrJh33I3XTCo4rUxEcCQ704F0XTCy7%2BtO13rqev97jTK2k1hB5SB9mdW66nmaHxaM9pPX23ayCCp2jcbCgBEzX2sYSWUfwLjqprNvh03GDEj%2BWp8fR4AwglI2j8xBzI%2FIt6AbEqkMzQoFfg%2B2EjTG0ewxu9wfHux6rVTSdlZOnSr98Hy4u6krnRR5L4CFoZ%2Bfs%2FPrlm0w33zqhWx%2FZl3d%2BrGx8DpBM7ikvO18iAimnuSEYGS7bKFIHzlB%2BhjdZoO7skfWg4z7zfNWePSEfcK44Fiutc0rjHOzvQRBXSg9A0%2FIWK5PjROEIrLiAaC%2BjoWMA5Uwme6ghMkjdVKXPOpEZ15LiOK5waGCKb0fTD8ouf07OfD%2BW4D97PTIGvQr4dmgjybWFfFouwpCqlpcUx1N0w3OMEIPDTEDBlyXfydMyH%2FUqIfq6t7pjQdlE3XQNRnBRtM%2F%2BujHrejDdKuclMLTss8IGOqUBjSm69sdU3ukrt1byK%2BzW4jDBpAcReCWVVtS1fSMZKZHPRn71GA6E2VEEb1p0%2BnrFcZHNpCBciAXEt5tgUF5b9PjT8QeyKQ1Az1Tyr7tO7mq3B%2FVgj3qBvW8nTbG%2FGqwkZ5v2I89q2GkfooFYWbB0tItZPplsKyE%2FekL99hqA6%2FYTXtgYvYXF4YWr5p8qZ6TcMOyCZljQRztLkeGvanMIBgmqVBLH&X-Amz-Signature=665f153a066198520b81012e1b5f4a741366bd0fcb05b51f2069346448c4d57b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
