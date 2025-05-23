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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3WDP2SW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCIZtghcWs%2FH4lfaBywciuYsQyvwxD2HnNN1KmgB9l0AAIgf27zW33REH0HPfaZdj4IgBWrXSpXmnAnTaO7pfZE3j0qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA309wYgjoBlonAFDyrcA6A1d9pOSiuGJZCxdpofuFKCiumBglGG4n82%2BYchE%2FMvG6e4XwSV7tpTJlvfkOG3129VnemOiANOHhfRijx%2Fj5E9N%2Fn6bvZkK4%2Bmlg1%2BHL7LnEYSfj9I6V4wbbp2nZVfF7Ogm%2BMSReC67IQDp5gcVrjERidYYx17CreVb1lxD1E3ER3u5OG4nDXMQ7Wq9zWNyfLO2btNRKqhCyXIqdOSpDZSny6I7TAWCU%2FLTiN81WPBEjpd9n10rPN2%2Fhb4R52Ua%2BZs18HLEzuFNcQqF1qu6bvQlpJWd8%2Br9mnrIXoh5429%2FgyPKuNZLQ1PNJ3ZObBA8h19orsWPTNcqJ5bPRy81uCA0JAoiAqTn7SrEyt9hVAw69zEBEQRoiHKm7MIW1MKp8zGj403tUg52myzmkyH2DdYl7pQlV5bKKbGDdDyX7uyccLXh01FcaKgi7cx2uK4Aois5tECtm3tJlHMc1tojhRqAw6%2BZRyhtOmbpVvAGfBTsrttHwksJyAsxLeFEsW5LVWjwRpGtrvdIC4DFJK4B97802An0kzVUHiPH1uXrUnxIBtMfnzHKWoSntGi5yEfxCK7vp%2BPLEFZEOkx8qkhu0fuyFxBvbDvPguxHoijS84car1G3dvGc7bBChAxMPeMwcEGOqUBnOgMT3EoCtxkasxnlk%2FYvL2CKZmrriC25pszPMuz6W0AX2eSd1m3rvmx9vEFgxzNNQoKIQAEoazbVhKRqUjG5B9La4HL%2FCvXc7TiI92UZqxE6iJ2WFiyPTcPbjrmofm6IldCSPiEpUjoKW%2Fw7NQnhTrFA2tuiGjC9c6y547vmepRdeQBje53ZyG%2FKgEh5%2BWj5weIWDdcetLsJO1QQGn0mNSsz5Rr&X-Amz-Signature=d4956c60845bf44c730a9e826b3f8400412c35d29bd5701f4ee9173322443ab5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
