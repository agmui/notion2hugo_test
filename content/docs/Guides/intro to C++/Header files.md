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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KSKJRDH%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCW2b%2B09weJEQaH8gJViBp%2BDD%2FfNpTS%2BoCharpQqiwu1gIhAPALU8kdEWd%2FU5%2Fg0RKf3LRan79d2Nx4hqNy4MwLdg07KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTd9wCn5Xx%2BYXdiMcq3APE8eSeE72hWKuCYOqWyAt7KgRKB74V1pwDeHXFhEef8FbTzMHHuaPirDKpKa9SBI%2Fw%2Fe77eaX510dXBQv9QBHi%2FTeAhupesAjBs%2BCq%2BMrCrZLqF5t6SjaQoYgCzRg%2FS44qTofZ%2FqYJUjuObxrqi94tfsCvFdXguGl6B%2FpvgoPIBL3ZsVhfEXIhTKQpFTGoJZTTNg1kGpQcAIsGa0776MoTeHFwxaGqkqm0rj2%2BOFiq863ovo09AzRhg4f4VerMUClg526FEZDBRCviqdhNaYSeqjA6PLN5VrWnToxv0GBL%2Fw01%2FBH6s2gZKTj%2BMee3b%2FtHkbM%2Fg5CdoA6%2BIe%2F22r3cSNolhdJnJoixr%2BVdsCqqxXp8gnqxXlNpzVuqgm1Oekts4Uf6YrAtGdjpJX9H0KOnB9vgBRBPPbudaW%2BTUWNjxfynRC9ot%2Fb9YAxmPHwBU7mkDlHd536gUI%2FJ%2Fj93fmYEHBG9J14sgkE1lN2yCt7u8738uvmd01pNWpMGkjuwTZtiSWYKphUND332UBrl7GKPV%2BMITYczY%2BoOUEpkEB4Y6Ff3jS4v%2FWBcTNs%2FOZG6WN703HYUtxXGwigrpgYAAsoOkwo%2BkJSq7%2B443sxp8UwmzpLK53v9gk6iwE4gPjDfybLBBjqkATjjdJA84RnWszam4yHYBn7RFBvNSCQpbDrPXhis5g4GFqQni1bXxHRCEES9%2F5Te52qR9kIoXHLfv6W7bD0K%2Bk%2B706lLNsXfXE0uzbPcuAlPQRBqfiVHYz3HWq%2FJYh8mQRL4NA%2F%2FFSKCKQsi4coa0Z1jkGHuQLWwRIUZw9AeNOhq9M8L4kRIvL7%2BS9XnM3xMXliUFNDkZHOLmgnXsf4sb0pJB72u&X-Amz-Signature=70bcb7b30951afe0f8da689c89e816210419fc29041a2e2af4fd2aa57d13556d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
