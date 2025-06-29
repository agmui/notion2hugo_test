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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MYMOOJQ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCujw%2FkN7XPtXmeepJXNayCN7vthe09KqXQy3tRQpwbhQIhAJeXAmAUGbxRW6RFT2r69nIlLthk%2BWGfjWzQEScycbhhKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIZJ69tEO3lZAYIE0q3APpM3Fi8l6UNJWiArX3bB%2BfB7i%2B5em5kBjfs5BgWw20mOoJHsFe03EinPu9t2OTQ7F6Ntca0kSzXFXOe9htGj6hOsvbmpEKsO98j9%2BicHhZB%2BmZTn7LJ3b3rzzh%2BMyIIAiTsyY9O1DuvIqD9AuyYV2eaDT2t4U6VzvT%2Bv5exYN1FX1iRATWoYYIiyqENIEFBVmCZtNu4PRER0oVt7OKHeBQy7shMHJJ7LyQ2eXzq5Yfpy68ncg9llv54GnhfTGiZHCIEeXGV7sPpU2%2BErXj90hrIQudA5f3K2QhfF7oOr4HVRxUSzdJVJo6T6VxMVIMj4JkXP0RAk32kDamOCkGM1NiIlOmdt4cCoudNalN70TaugJl%2Bh18Zh%2BEx98y8w%2BIilWVXvqQQ9VVajPh4lZSLGKTOdf3YQIjGd0FS3CzIRjXbMmDqsUUovBeTCrGVB9k7%2FcmIM0jP111lL81uztUjjrvnet11zSwSZj2r68VLw9KK5RliIAqAXOG1sCuoIuXn2SpZ1N4vbniqIEqoG0ccUIdPP90Ts3LZp98VMush7xvTXvUTJ8Op7KYWEgae6UiBTIHPKsJm5WHyRV01DDYM6jyaa%2FD%2Fkhj8PpuS398QE5Ot8Mb%2FXQEs47Gb9G5XDDVlYLDBjqkAV%2F55%2FOZm4DUfOOyg2XEIbSmDrlGSXsT9FfM2NVgdx%2BGRz8pg%2FsNKRFDnG45sXYuw2PQxw3OuKZlorDMVjJWJgI0QAhUhUI3wVcRAPfBBl9WIjPbv5EENxPD2pIaY8K3XiqkS5O9JxP%2BkoJraW8UMsweorDpemrRndiHflHPX4Uorl8oqdsLVl3sRzFRGBU9mKfssJkLPCY%2FLNQQoQctoWx%2Bp72J&X-Amz-Signature=c4ac578d87f17ed3fea698c739f0f2bcdc087e7ca02be154b526d4343b35d37e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
