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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PMS5RGD%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCPdRPG0EHCkP3oiPaQ2EOLd0p7ZaLRDDkW%2Fu002jaAaAIgaaDsbAW4c5eeVwwnZevUHahsW5hpLZ3hRKT%2FYnYDrNYqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDC1G%2BmOytvslN6b8yrcA9ELjZQJxuuD%2FjbAWPhdYC1N0uIzYabP75atJgOOBHWiYnpfXod%2FQ393ZT99sM5myC7szRGupCKrA%2Bslr89Ef1FslTauSLm7bGZL29YkiUuAJGdDHf2vx2E57pTIom3U5iJgrAx46vN52YZl%2B7hpkR3Du5%2F%2Fb0SEOC2u2ZJ%2FEbPQVgVA%2FlwGU0J7dQUC4Nnt0PrsJj3q%2Fj2hG03kMO1TpU%2B6KN%2FR4EvUpxfPnMR9mxCbdudYd1FWccjQDqeYBoeMT8gzNGcwPAkJ6%2Fd7aFwA9HcgVGKrIWd2TzHBo3z7O9A8ZnP%2Bl5C9ZAa%2FMZC2AsxsX47JJZAqVcGjZnYWRLEOO8sZY3U7GqFSP9iKL83tCO32vVcEGh0vmxzntwBq38HsnuVNNuVPmx3%2BneCN3IBh3mE83K4XbELbtvKULgmPyPe3qxf9EDUZrtNr6NtRvtsKu0WwqYjR1MHHlm5fgSurpe%2FzkjvCeZguxMcnxBA%2F0jVRMr8HTAdCxwpuOUbOzKYlfum2PgSqpq2gsWNa%2FyYgESpuyDkO%2F2WOp5elZjW1Z73waoti0Nsqh3HOcVFTlthx6Wur2plK%2FOHGcbkkzpoxWh77lr9Ce5ueZhSBzRzK8KIQYkH%2B7zJ%2Bw5skdd1cMPWPnsAGOqUBaMeGkoLxG0h34V9edJjGYhkYqrRkeTwZQqkS6I9o9SKIAqkfG7nqu0Kjp%2BS9G7ReqBNMhf%2FOsezNnm%2Bo6qYPYyY348%2BjoyPnk%2BVeHMY88er3G4jpAXVffyFaj0HPqjwmHm5qzdmz%2FDaulseVMwjqodgO%2B4UD%2BXif7E%2B%2F5X7iZAk2omGtj%2BmByoa8cYxfvRgsX9Pg4uCkz1gj6ebKigW%2F3PNQTf4C&X-Amz-Signature=cc3e30f8ea560c6c75e5fc9a232d0ce1aff4233b73e133cedb483e43227b1789&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
