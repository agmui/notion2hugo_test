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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVUKQCQ3%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFoW3WOEGYcMsiJh6OZToUFK5IYsutJvAe%2F24gzZpOwAAiAHITEsrIY8Z2toqWutDH8SGF9RR8JFz%2FI%2FOwWnYY9HvSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjAEe4H3%2FQJVxsBk%2FKtwDLfN1V7%2BFpbWyixGFKwnJFmS5fMyRB4GhTjAUkEOPiG8aIQDwrmmbGTki9z43cJy5MO3I%2F%2BXy8ztJ9dTbY%2F8XyXHP9o0AvFBQxFcsTm9HC%2Fuv0PaQTv38Qvfkn9Vb0tjpQxfU1%2BHqFLmyK9jxPqHLLG5LZ9XC3r0H8oEzDWU3bfJtRIWGvjvPces2r7YFPsLgl6Zh%2FieiEQNup525qIgE%2BvLhqINnKddNK7mbPM%2FH6%2BMIUiZbCy4l6X8TvAzX0HQYlU2sdjQ7NQEUyWv9cGp6Dvb0PxcQV%2F1Y%2FrUg803nNIX38Ul1j8Q7pDlQfoUpDxrXuE7ct6eCk3t45W4%2BGDhumxoV%2BEQP2%2BZMkgfdgq1hX%2Fbbm7z6eixY1%2B9JzWssz1Uopp4Ec5OYVlj3X%2BmCGyYRdBnmaYN%2BSw8Vry9BHrkFPq%2F0im3%2Bii3CP2beKRfhXjtGP085Mp5SDIatiWbvBPtgXq6ZRAAdnLc%2BwUblXp0Dspu4e1XwfoFP1yQr6bIAFHb45GxWaIcAbMcz4zZOtSbcaXpv3itiv8dl1eM5tIAkHobqJQEk43wmCMFeYs5DXJxMFjqYwCLIORCDvKJ2tbKaEk2xVi6znXbzCU2Z85SMsgccgmY9zAKk3HTN9pswh7HrvwY6pgE1qQHtkFhxHjEWZTRr%2B9BgoEsUW%2Fjz8K8LfQvFwgIhKrsV8r3oZbCTuKh%2BRi3pRhGw8g6DW18lWuf3BpGHdPSMso1iujS80Hwcc4xuaKd1rp%2FoC1YZHKWnAWUQQ0SEFsCjM4soOlIst2xtF7SSd0M45S62%2Fgx9IBM1l09ljeNR06YlSBIP5q6pKmyGCUrh2ukNCNHaMEpjOww%2FdJ86EK8qQph%2FTqbO&X-Amz-Signature=bf4de7a0703e8d67c0b84c00ef16a724795ef057b1b9a2dcc42a35509c504d5d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
