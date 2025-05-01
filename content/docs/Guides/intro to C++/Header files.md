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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC362CYP%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC1u0BS3KlS0uEGP9jvQ26ZecLla1xVcvjrKA%2BJ4rPSxAIgKJte1FPq%2BF7MPgqEfSIJ0rfouwJ%2FFReTiyTFX4C540gqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4y36zg3EW1OX1wBCrcA9FR4vsTDUXJu7M0uI%2B%2Fi3Wl4lcc1Qw26RpP9GiHVk0ct%2BpTy9LrVR%2BDm%2FkHE2RPVdIHhCtnd3ATv3ZY0Vrmb1GW9cw2Dzyiv7qyvb4h5I6lw0y0wX4TRgT0sL%2F4zQCKsdFz7gjmC56%2FGX24VQWJDXxQ5WNsJSeqP%2BiX4bwPDqpNI1vxmMFK23S9td3ju0eniqCYZ9RA1696505issZGBIXbDv7Rp4tOJzOREVn5mgyrkHDGqUqzC1Nt3UMJy3Sh6XU%2BbqnJtWMH44%2FXbslIgaJQgT3j0App%2Bb9S86EJe9ek7PN00gNuwebK%2F4AWWxRXR2nMP7tr2NHC5Fk4VJcUH43jzTsZ6QUn2SYqnFeJ4v5X7nu0Y1uOebYOIRo%2FuCeFY1%2FJe3qkMM4gdHDhnzGDTA3xZdsJjRWRwZ2ozE04R%2BHEHm0lWQeQ432WtsFej3LPFFFEtlQWMuYxhy%2FbHWXOqBeAYurp0zlaRGgxj32gjVcjF2ti2RD1QNXtfeQLjI00uk2GeuUNsVDB1%2FU4SPmlUL6CLQ3Z7wvkkOIYNF%2FUJx9z6xrxDtD8euhc9aayXCvlm%2B3uj9tM3IPmSTlZw0Utsud7loQ4xcLY%2BfYOD4H6kkjc662dC60NKTrDa0uAMMXjz8AGOqUBoVTLkPJpJrt5kh6ae5K8V6B0qZ8qKLG8%2Blf7dL9xMO3txS1Xwxvkl4ObzcJFRVKjaBufZm5rVBUDFasJB4Ez3hAj5NZcqlyJw12ri41ngybdU2s6YDJQGzYd8NLqXwVgR60eQIPekv4n2RVNCStivFuSlnIXIXIsJhgf%2B2%2FmW3vUNN8sjzpSGVFfdSPtqiTrl4oZwPKvGNB8dYl7F7o5vF1WrTpu&X-Amz-Signature=c719b5b6c1955fdfd800ccb097f465d33efe93be0e0794841f90a46ee0049510&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
