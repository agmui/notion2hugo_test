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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH665TZJ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSp33qN2FWJSS967AHJyfCanVQGJgFIVEFXRtd9KqrVwIhALhdfmZ4sBfF2ctOCSdvhoLp3Sj%2FcSqQ5HorKv%2BtC5yhKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9iqI4%2Bj%2FWsCdVhdQq3APm1TbPXYHdcn8GnaD8JBFuV3XwpbQttUIRPHH8jc%2FoB6OgjUad%2FzzTWowI6i6Y2oRfJuZ9alEp7bgjELtSHfWaoGo3S9iZs%2B4ikPNN21uqu0misl6RmR0bWx6xVjRrnRYQwfRi21DcChRE6yj5ZZL3%2FcJBN2t40H%2BoqZOoTT0dm2%2Fn1bRYPjksLNi9N1PWOeanbVfBW%2FSnbleSrRH5asH6Szf46c7gfVLDh1zV%2FTEtfMofS5EMUi8ebjdxokEagGpWYz%2FRYfJtO8T1n1vXWL3cJmbX4GNWD1H39%2FFWuY%2B7HQSL0iUXJEpdfkJwyO%2FILh%2FZRyUqc9RESdFB%2FQ0xN4163QKUNZyYE4Zx2AfiQZkR0kM3fuIa%2BhkRS0fqNeYZNOXv1O2n3EQeUxF5R9JPbSDWuu7zpYA639j6u9FX7yqZrgJtL8cp%2BVhqbZOPPfC7QAiHp5hxggAI7FhS8c7OfGMiyZMmqQJkPhEbFIYy4RtL9wE6aWyONRHnpRBiOEu0CFMhnAun0uvruQICSfvMz%2BLJ4IG6nuctV3rWOQBuW7r%2FaoEntZYF3cMBt0VYIiEvtZSXd8fUs3GBDLskx1mSHhJ82q8eWPPI8UCnCfLGdLf21Hlj9qxUDJKvTxK0SDDGqMPDBjqkARiJlyRcp1qGU2NdOw7%2BOZrGSsiHqChVzmD8%2BAfZI9cdfOFjMtzDAIRKWffWRqpO3QR3E2EKjP5sDDvc1GJeljigovS4H92MChswBLqcWniVXE6VP9OOEUWYFN8ty75IRa6WIB7EoZpRngrSilIs5OGDc%2B3lNZe4qOiJV66L1XtNG1IPnVeGQY5T9qC6yk1%2BVvZ4s%2FI2FJGkmnpZAdMdKgYJMxAv&X-Amz-Signature=6b5929630eab178553c12256cfec5039fd8fa283e6702758d58ecdeef9c1abee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
