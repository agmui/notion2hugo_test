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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEBM2ZX3%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQD7nUpvJ7pmQ6ulI0nt5JrFkpukUq%2BVq3mrfjXnCKLN%2BAIgLfHAzaMLWT%2F%2FPBMMUG8JlJDpt3%2FzU8mLzkkmz9rZT1oq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDPeav%2Biu8iou8FbInyrcA6b6EQ4iV7ozkdwUo1THacSmvsYxQ8d6iWXhkgkPoqoF3mcvVx9wZBD%2BMhwpiU0DKL2WaDVhCQ5iHgfP8oOLV9N9%2FKL4VxxfzV6rTgPpDpptU1RBeiRYNBDfflVKnH7ssRF371fXcizaf1aO6LPMmKaQ3ksyf2f20iTqNFVcTpcImWIue12mMMkLfr8vbbXxzF7N%2FqqlSkQWkvaS0J3pofOfQ7c57JGzl2vzQe0p9WZYyCt65Ll8096fNHAw57SwATys4uxFP%2FoWADga1IjNcddBhXTBBBhdVU9dJR1g6P088USZnoA0ZWUN5oyEPUOLhO80aMg8yznBbRDM4UIEYyE%2FmCi6Lc%2BoAAm5BfMWXLXBJNyOJm42sIl8R3srXUEQ8R3Yw3YZ8BUu9Mu1JOecxlRAs7cdPAi8D6eYngZ1gTvnj3kV0MrHkaE6M9mY0hbfyWgYCz9Tpf%2BekBOCqGZxsXYEcGFp5iKfnJEDemEhcmunSwC1s2u81vkKltVk%2FNQXBu2POWlDozTjOK6JR5NUu7XCApC2hIP8e7CxiyuueVwX0R0%2FD4%2BiZdof6poIFwKymNGmUurPkmWwkZty1gOi6BucPKmH3vPtY4MRh6wGiOOkOcP1mvi%2B3bRjxCbvMNzMwL0GOqUBDwesQGzD7km1lznyitLu%2FpRlwOk4jTtN4Mzm1YsBakt1S%2BUqLNpfebs9Wd%2FadJ%2B12bZRW4dsTYGYTxjSwPQVZBt%2BQyAhXnyZRt84oAufvXTjl9nL3ND4g4AEgfFNJ4ml3ZTPPlNfJbL2aXPRUc3JpPBtKZ6rDPqaqwv8dZ33uPd8enSVFj4Pb1nbZfJnw6Fo1FB%2FlnncpKV7tQgAo5UPyKbLFRX5&X-Amz-Signature=8def889f12cc55b50d89e75d4bf03c4a8987d4cf0060e0452316fade900a90c4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
