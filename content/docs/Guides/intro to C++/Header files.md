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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQB4HVJ7%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC28w0h%2BITa8fHQdP59eTqART7OY5QtJB884TvS0nAtwwIhAMGqowuzyzxExN75T4%2FnUL3chtZ5EQ2rmnUUNs1Ya%2FDGKv8DCCYQABoMNjM3NDIzMTgzODA1IgyRjQNTAe9KsW6fC0cq3ANIBPAseK6m%2Fy3camuR0m50giWt%2Bk0iVgcifJvguSGsaZIuzpfqaKEga80eNaF8U1vatJWGChUfPsazMih3zZTzDCTyfimWaWMiB90M2IvXnpWA2QshKFTnci7d4oYV9psEaJl0lrh57gdxUe6BEy73llnmGvpjbxyEqXgraMHcWEMtM22lOWAVQPaBCFZu1eCj0t%2FQOzxYX2cUEhewXz0eO4n9CaocFhzyFn47DcwBfFu4aC%2BaH3pU%2BXk2kcRYkY2wWwmohGZvdwh5vVt2EKzKQa1tiBb6F%2FPLWc1%2FRX2MXuyD4vzU5HwhSxg5hgtPgBcthbj5q1UigU44aCQYJrCNAV2FxfJzpB4DeLW%2BWfxT4PFrlVkLkBV3VaEul9nmCS4bidyUvDuUJDejwfjm%2FdlEXVumEuaq1ku9tyUBhwo1Csgx8MDCp81U5FLwnERAf3dXp%2FR4zg31iHvuq%2BcIyj%2BBqhTUwOTZPs9ImymPLsGRJ3mYrWzfILm92bBgv12knu3UtH84rTSwZmdGiMgGrBsNLupDTfYwm%2BSPhpwF4Z2uJcM8sRD2zKtxl6CZiGkPoL220bhgpQJ3EQn3Fms70fEMsDY2%2Fn91M1jrVKWQTQnWJcIb5oNDW8tVSe%2B0LjDI8MK%2FBjqkAe967g3Iex0FEqR9BvbK%2BU2cknZVw7kpFqftoxGpaIrgZP%2BGQCbD0wWYHS3cUGXwo%2FGnTs4e8GercJcqo4nFT3IRW%2Bom91uQTTkt4WpKUxJ%2BHUgY5oW%2FfEZU1aQRtIJQmEk%2FZ4j6QXt%2FGUd0qNn9MKL3IR5pHvaw9pcXIDp2yRY9TSWI3KCKLkj2F3xY5r%2FMkN6CJqAR3QhbC%2BKw5tZJVl%2B03%2FlG&X-Amz-Signature=16ae16abdd71d68a7aeb982671af427a6fc4b9cb9c1b9cb34b38b7f9ac778cbb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
