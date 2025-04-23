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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G63FWWE%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIBGx5SITJnEwOWW8zbZF5Y1fpS0QRtGVGNAsDFKUim%2FdAiAXINy78AiV181J4RPDELQ12ktfAFPUXCx3WZGHCfAQlSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA6uBnXBSRVuMSnMEKtwDQ%2BUOb2RPF1E873MLTz%2Bhq4O%2FRJtqlcbK0V9IIg8VGtTvpU5fiVJwNVEvUF6cRZTo510zOZCcVmcZswkHgMEdbfEAP%2BvtpXl5F6FI%2Bnsv4h2SBBqa55dq42716izBnALXF9W9YO%2Be0JK3Ix0AxhUFwWlLauH3mdiTXC%2BXWf%2FByZxNqRF7e3OHejNT2cf7OFDrThcZzQXaf3OofHkfT5fZjQ4tQ%2FhX9WN%2Fxy1y7122nbLbn9pdqYw3aHUV5w8%2Fbvespa1%2B%2B0CcJWe1FRNuyQLKjoKgqvDldHkgCpyJUG8958mzDElmlcF5rNBKkHPxZx%2FQiN2KXKXdw5DtfhStAdYOUO3r%2F1O5bO3q0jRgME58os2NaTOoAz5HlZpm5TbtZJqIjY5glPM5443L1yu%2BEuolEcrq67sxcD0sOPY%2BqljQPEnyoVm%2FxIQBjz05ihLDx2B8aG0HtS5XCbf%2BwnSl3i%2FcEGPd9Tx0gwmxStJMUPdW%2FP%2FUrTBR66xHDypxu4%2FREqvtwIXMyUfheu1NmYBWx4iiSLlW%2BnVEpnq%2BkuIwOrUdWzIIQGC3TTL8lFzmf7buKHOq3G5DtEfDKL5bTP2VleDeJ%2B9RcHucvzxXcdzjvoxYo2ApyJ6hWG9VSidsHmkwx%2BmiwAY6pgGrXpf7w2Jtukdmbmd4Mg%2Ba0aRuprSOk1Qo7QwyBw3Zragmm2%2FDcBcyLaR7vs4sRpZM5wI2HzyZTdrexV2fC3p3JBF5i%2Buoxd0fqmweIOtgJZk7Q%2FfsaFF3DPEK5n265mvEcxkVGztNO8HfBgqoKlmEclHOWIRCQduHzvUkyNYLc70IuqcfcK8i6O5kGRhKa3xNJSR9scO6ejWjLA8yLO7GBEfcBA54&X-Amz-Signature=c33236ba6fe2a7f00dd0cb4471ebac7088d5e80a7036c15fd4b50f8d09a806a1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
