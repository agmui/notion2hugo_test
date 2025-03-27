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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LL4BXVQ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIlPiD5ECLBkX4byooo5OlNxCVR9FeECqO83ldjr%2F5YAiEA4BKiDkS%2BiOAJVCtJng4ufe%2B7ZoOdy7%2FQOCw5BcWN0vcq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDCfDIn1XSH4QcwQ0UyrcAxIHANV9yzMttYhgcB0ucKbbE4JeY30cK%2BBQYKS8PAssYvjaOuzNgCfv9OSOxFzd3s6tcXbpcm5Oxf6kyyowsT732qREn1%2FgnJgbfcs3DDU51yvUTf6o%2FNBDMR9o%2F6aBFk7AXqx%2FU9m5Eolvc2KNkv6HCNG8auZCYq273aV%2FhPLR60%2BPfvtgdCy2JkKItowtlnFPLDLpFqlW%2F5hSi%2BrOSWqyC54HG37JKOzyHiiTkVSvdORrLDw7nrTjPDAnZrov16oPJHSbqzKczhL2H9Oj%2B8k8pooABFMtQNOp2WsToBYQu0E8ftNkJ4dbOGp3euzkbZiNYs5%2F2pfCMNKgq8laaIzVD1I1txCu%2FIrJzK%2FK3DeBNQFGnqCgzPKPYvYKtEyDlKvyTV4%2Bgk13c6NAERzXo5UA1D1Na3uhERiyjeHgdN2uNJGypAlii%2F%2BdV2LBj4tF3usX27RX4GQA5h5c1UMkp4crPRqvIisI8Dza02Tpq2PgP7ylBxnap3kDQzXRjE4QEdj2qQTXWhmBB2RDGZ8okgXj2SY%2BUikthQUs6Hn3JYs8RybIPOe7pM8hZD0KKfwtFtbPKbHYECFMs30OcToEzIdmdNveNNk9xScxM0x8sKQMEClz5YyaH0N9sH4xMO6Nkr8GOqUBvH8MRUScq8Bbyr7reVXmJZ%2FCNeGvm79iBEmhF8iI0DDusDemr%2FQH5i4jdFjCBBWQdT7MEBUiegztlYcoB17gAsrCPgbkY2aAiBwBYm9SPCHUFFxaD9hH8zPkrjhs0wt6Kq9kRgn3hq9HvuNQRROsXNoV9MkudeXcDFNxUBfbbnzSojneZZRAnIHa13AcviEv9dgLOSFcqgq92xRC6K4z7Pf8AnwW&X-Amz-Signature=737104d118208059fc035f25587903be67771aab3ed55afb24a17b9565f92d76&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
