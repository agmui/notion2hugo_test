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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RPURSIR%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvG3T%2FrCJMxIWkS3%2F%2BCbXkTWIbiVY%2Fi%2BW6LcPzQtD9pAiEAqBPzEYkp8bAnGEwVro2gcq4uR62qMpMa7CbhGk%2Fo4ukqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPadwNlBEQq%2FABe3DyrcA132R25hnhnwhaD5hp1VfWp7JJZQ3VxjSWXR0SaeikgvhWyrYyniAwlex3EutOup8KDoOV5v7bNtwfxs9UMqlzi2SBgfHxPdqVUMG058HwqHUFhzKXH0dbZQWSvweiYdxGeV9nkvTOt79%2FZKWrnOJ5hGE%2BZgq9So%2B%2B29MbNwPwVPcrmqNrT%2F%2F8jrAsVaxlyOOcfCBsN%2FPsB%2F2am6NNbR8RIiKIOnQYauSUXYT70iS4E1NfPbstboqZsv%2B9YnEfp1i6Ry2AhS3nTRLh2IFLthN9eeF%2FnOw9dFc2oBUlyxwLdkbYOcZiju9rYKFfTDH2iYJeBCH0JsTZtR%2FO2iat%2FPzaofliHZOSZANYZN9Mkf8Ps9wELjZCjFMiw%2BI%2BFQB33lt%2BA%2BQdCtDecGXG4YBf8HufsksVeb73T4SFIQWbNv6%2BLFM%2Fy8jw13rV75lHvZPfYf3AbRBNJrjXmAIFgMo93xgUvs%2Fuh860B3yrtdD%2F1%2FJXttL%2FAkySJlFWSCiPO6XJ8dGdGlugH9qxwFC6Owdma4Pf%2Fww4bb5sUnElxynNCx0AsPrGBRVUd%2FT21y8v%2Bjgda0Hv63v%2FJSnJfwL97JJuBO2ATZ1rGn3hQkAR%2Fudnhon5AdQlGs5xWL50T4dKKAMJK758EGOqUBb8DrQjHvfX%2Bn0cp0wN9jkJV9jA8w84f82sYZBddrIv2yMmsWj4OWozVmvAzysbPaKPgr6fnFioUwWSdA7X%2BX%2F2%2BnifY%2FuTmuECLbwVLefwLnDrHS%2Bp%2F7uZN1hAbAjbqO2e%2FEy8Dj2eo5xw5fyemKY%2FMYJwWt0IfRT3iD4Heu89TzFPq3ZYFTQVtRZTsW0zZg0Cvur0Trv%2FfP9yg45QYIwkQTNxqg&X-Amz-Signature=da0b4f30cf41ebbd8cee848e618d99fed7d431f1161cfcc21073761384b5a18d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
