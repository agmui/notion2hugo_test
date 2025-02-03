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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW644NRQ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDF%2FWIl4woJK7sfemyztFPsThg0wcaXA4QWgiZl74SeggIhAKyUagfxMT6VJoG7OOcaP11jXsOEGjN9fjhnr5MLK7E3KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTiSNg72sBCgJxr5sq3AMv4PxGxcnURFPj68ovXeRL8fAkGiKtW8jaHElHo0xler7yrumaYOpg7605NTC%2BaEwv5kOWIRhOT9q4zXthQX2C6kZsehsCL7MBABKWwCPOWyGBn0hYPBj%2FBdmiEcPkwBRZrKJS%2FjdYvj93mv8Y%2BTkcaGHISP6A1A2ibKU%2FubXrTg1b2Q0A1dxngmNbVoPQL1HKnc87%2FU5ir1fNfgfAQOkrrYNX8NvCNU388%2F5WqODgkVZ86XIC4%2FnUAf1GMN2Tdc%2Fm%2FtwIRhPCoaBtotzibZq699qdppNIenjA5evAG9trkKOJW1nme3HN7nwhADqIIfDurM%2BBHmLuMx9ZvZtuGvLjnOSU7LEg2UVQL6rs1OcSbmGTaZEQ7phEWqHcwga3wamZP%2BRpMsv%2BC8HWuXJHRYnM6IuWuS5K%2B96rAKthxdvVKlXKIiJkDWKeLLS33RhUOIdr5ZFTU0VUBbdaQEgTzObt3LfTbVofuyisBOuVfszNeR6maNtFLXiE%2BObAi6gXIWQ9YOW8niL5%2F9dQMvt5o5Mnm1yBWX95bUltkx3XOmfnu1hMcDOF%2Fj4MgXfS1aYJ7LkhaYsXHAu2pNMsMEKw5WpQt5L1CzW3RsjGoE7Sv0LH1Y7w7sf1fvKHIfutFzDawIC9BjqkARtF7M7PB5tlY%2BfOVCM2j0MZhmg6SWwfYYuh%2FoO6JdeWMEEo8uQ5K0PGz1stXS5AHfU5N969oLtTf1M3%2FjEku9dMYjnPnj3jF2pihPGJ1qApneyZgGLvyZOynHvxPLYK68h0M2otqO5vwGgUJjKbfF%2F7l0TEuEyrzN2tFIoS1WZ%2FnGX%2FV1RRQAK728Ex3R%2FIzobxKEFqmQVSoh%2FiSibFFiFioA20&X-Amz-Signature=1749fbd497a50c489da7e030f4b9caf907c5b7b858815d81b2721d59efcd793b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
