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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTPIANMF%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDcE2ini0rVpfjq5oacGT3xfj31R41HCgZvQOz3aDKmxgIgHW9526xLNJoITSko0i8sQJirk9kZy6ih0HRoiDidYwgq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDFnj4AuTNfoC%2FVkRZyrcA1Hilt7NSngqC1RSxINxIUhcza8EezbqwUJJiac7N5TDVjNuXEHfdZtKSvP%2FzRel49Mvn6M1%2BHcnzAmKQDt%2FgTno0V7qLGYktNr9j0X3xuiqbyw3aRsNhdInUJxJoe9tctk801ehj%2FiSAZqyCh6s0uKAzsFZXt4Ee6g6TdcItGp96GaBPF%2FxYzjYoarg27Px8Svv%2FpN1xOHG1cFp8R1o8rDKfMFg6ZlDEnNYjdqs8z%2BfWWyBbweAmmgZzevktFFmYI8oep5Q8L9Sc%2Bbgm0IQX9GqGx9%2BPvx6sOgRGre%2BwzdOSaAVZa8ax%2FW2KAgoK8gGfJ864PtpWHJ6XFsneIlTCmcOwD0ZXwxUAWT4V%2BlWcsSGAXFu5odBJLsFBhchUJD1mX%2BZ33uWIGkCsL8S6MAIqL%2F59HF9ZjUtCuggoC%2FROG2PXewr%2ByXIo%2FMMVRwIRjZ4j%2FOjMNV7E0gfEGfAWbTcKmU2i1C%2BWGJg8k8at3daPD1n1GZOWe5gx1Ba5EpzXelMruG6QQvTWQTXBpXajGZ5BTCwxPBbMseT1ZvhifTViMdH%2FYZUZbx6msx3huYVgBJdzHmvlh%2FILF9hk4phj81OhpgAeRuSDItsphxGpQ5XSzzoiwKw7Y4J5Qz51gwmMKbMt8IGOqUB0pbu7wRORLKmylVTgNPoOSwRZF29x55QvYX9ks2mrhoDVdcfNEAG6gKJIq%2FgjiwOmVKJtkc3Dp1TYJ4NFNLYEict5Q8MCUTDNjZsKdHgJ2wt%2BdQHYsgBY07cp5gAEaQ4BDEuAz4xZw59uJPSTApXo8%2Fq87bBjw6h40YmwXbikXVPEXSb9humt9ovh%2B2BPlTSwiZ4sPRRE6qeg9%2BP9AiLFKuf3aOg&X-Amz-Signature=e13f84fd899c709d2752ff4c65d2abc6d224e7bccf06aa012758b5d1285907e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
