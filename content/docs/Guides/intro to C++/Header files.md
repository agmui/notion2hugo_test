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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AJTWNIL%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDAkp65LGxA7LQ7ZHX2BQ2%2FsaG%2F3FQonw%2FpzYS58qQjegIhAIQCL59kTv9kJp5UjLqFvTG2XeCGqAQ%2B0jJ1foVtQ990KogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVsqm2KMBECuALOWcq3AP3VPu7RWqOpXExJGDHbt5X9CcmFbjzBcGfIpzkR5WpEz1GmjLex887qNKzw%2BTG4j9RAps0Kpcao7fIBG4NNxdDsB1YSCnq6ENVAiiawp7kdrvMJ6Q7ShmS3YPoBm%2FkyxWQEzpJAQW%2BAQgqosNsd8x8FoerYIkDq0MO4YdEg83RifM%2BwBOb6yE2ghFNoTF72hjy8kUWXxELifjz9gFpOBqfnfR4PVe%2FPt55uzpRSzc8klPCkTmXJQC11MJjYYRZ0p4NAeSZkM%2BMsS8R6pNanici%2BtCqDSA7mMXvPZU2TuzQgKlicGw391xKW7UDGjYnCV7MI9SBLHz3v4hFmTn18lT4pP12yIyhq1YFyTOFJOj2MjmsoiKndT0EsvpWtqDfiZo%2FrQIN13J8IWKFpMkhTOR11yf%2BvFzTjTJVQxUAT0VRZKN0NdGOr0QfcFTXr1Al6jtLZ1G22%2B1xO8Iq1vF4Oriq%2F0rHFGYrRHJaR6XannOzHnksWAoSfAdbMjSCuzUTXJn9OIrFJMDIQRv%2B3lcOt9%2BvFObzx5AoJp1Zz31uWo7N7PWsrfe0BTvUcRspMnRvcqM3R4mom%2BYCzZouFeu0t%2FVXgA8s%2F1qB4kgtRZX1lGfbuPaiez%2Bs%2B3iY8mnEzTDl2Ka%2FBjqkATtPURU1eYWIENf1TeZjzI6A36tFCnUUbs9YrgHQVAp2%2FY%2FxbfrscRruCege4%2FM6j41%2FJdGZvF0HOcSYej5mA2VmUjEhUT9XbstqmxbsbtVFxjelEA%2BYicBjJsLl79yG0M9FWJ5Q8dSiwZ65VzFs%2FmX8X5CGJ2DVV7C3j6tZ5QCn%2FlJA%2Bc6i76bJt2Q7MD7AkoeZ5P82ierzmZm4RyrNxjMX9wPs&X-Amz-Signature=9d4627e7ae9de7b2e6df43b6a3fbf98a7c9f1e33376c3fee93168a9a0193ae13&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
