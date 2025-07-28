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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFZFBQJY%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCB6ezM7v8JHbT14Ea9h5Kg7hgKQ%2B4DXBwkz3FKg04GGQIhAPE7cnPpECOERbbCcG%2BKynjh2xA8dFE6BAgE3MnFhCO1KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5jHsNsMvN5oj2DXMq3AMoiNMICu482TpCs46T2sUHxivkwlX8JE0tCbUUZFJcDfsF%2BlUknDFlJYYVyzu8SEC%2BHGEA6j7txEkHF6RPIzYno9paDuCLSOrt0kp5srFLQqdTg9lozqWs9m7S9fYT88ojr7zppJLu74okk0PIpqyGvXF26aIdImfE%2B2EtXGiwkRE7I3gBJ7SBb9Wf%2FhdT43f1Is5RVBZvfsI%2Bx%2FCOMgkogArvcCyMrfeP0KB2d06KhV%2BMHvt0Z9%2FVjFcL8mJpbW5oW%2FTah0cROI9N39jZpR3aAA6pGPNdz8hHLg249uTUTwJIHtdKCAYwj3SIi8eKnYJ%2F1ektM8qkD38AluSEjKKQy%2BBAxdrNh0xOh6a4BB5e0aYrkZSK%2BqlO6wilZd5bK1jDRszJEa%2FsLINkN%2FprWzXDvVlxBjpYSFHO0Q2MzgDy7SQ4Y9ZU90HSwz2VV6NGdBkiAnD17zGTTnHa0d1WSpLGRSdeLBJ0nhl%2B5dUY%2BW%2Feun5iEM76IReFRrS3VrnH%2BrFtS1zESeV8c16%2FQasGbDE0%2BQojZYe%2FYUvlzI86JXApliz1MS0NofedyHOu1lBYvFBx%2F%2B2WXFTS0yfu1vPnBQLsTIRZ6rBrdjHn6zX%2FS0xC%2F2h0EgzBmsK7G547ujCRkJzEBjqkARdsdhKR%2FWn109WGx0d8weiRI4H4l9cOwQ1vfFfQqKjNyUPIwCHBaX09VEGAv6aRZKsGafCoNfj75s%2BGf6J%2Bi6S7D7GtVhyFRSM9jp04uy7Y9PNq%2FR4WvdK0IQnZXqk7kOtdGrLsRk6YcTqY5MGMHpa85y%2F4UoJw%2FCr0oJeaaX15qaak4ilBWjliJ0nH663B4tMQ0abjb%2F3scDaN7CIdpdizJRAz&X-Amz-Signature=1ee7b7ddbd5061a1b9b09ea2e8b3f95410ee9da356863eabdf646d79a37ab094&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
