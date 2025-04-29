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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSKUA2QW%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChVGtwrDcG6jeJ7PYU0on6jypwuYtomsj7a6WhOTroqwIhAK3QGmQ4oFjENa3AAY99ueGVC8VQCrgzkgdABkOImGO9KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxsM9xa1CEy8%2Bvo40q3APYmYQfhbhnaWllvUn1OHiqOZdsUQkuZzUt3rX1QrSrzrDUBEcdB%2B%2BoywCEEsyhCqBhplpkXhJtEyro%2FYud2UKdbd2K%2Bg7wrxe2Wc8QrXKlY%2FDHIY1%2FOi05SW9UfCAo6VCSn%2Fp4AHrmxuLC6C%2Bp81blcxziUsEK6oFoQtcz3HFUk0yCGqM8UlGq2WT8oBjV3Mb8T6HdD%2BgTxDgZw3cf8NNHCp8fpQBIfd18K25biNU2eq7KT7rLGx9t6A9KbE0EmpWOvTWPVAGF6AqLw04cSht9RMm9cJosM4JQKZqMlAT93AZ4xFi3D14px1Ht7mxPpADpOeTn%2BXkntWbkC3Gp%2B9nSEhqC6sLqL3vvuTEcprf%2Fx%2FQ2xNsqdBPR%2FezQOiivfF880uuZDYxQacK61CG2oFwIFf5KLnraJU7CWQIHh3OwyuftWuje6t40B%2BOBkQwHamn9Eeu9eozL%2F2d91IsW6m772JSgDlcQc4SkTQ9dlfB2751%2BenphyZVAAc5RIBgzPTYqqJBr0a%2F9Pyd7EL6dnfYE831zCr%2BjQTYBateTNJHmhghKf1KSearvSN%2BQyErsfl4DiobpJpKhNUToizSXOujyLMo2djDnyogRvCotiXjK4vkLjxWlNWFuzFkYSTD2o8PABjqkAV6CjZiUVk5HoSG4Wdy5koZixDM%2B3Iphr%2BE9lovN8h%2BbC17CiRz5VrCCh1Rfru%2FoG7OpJzW1HdiHre%2Bb19nQsXHmG69xfuP5ki%2B1i2nm79Z6%2BUnAd8zQ91%2FNJedU11MiD2xlKUwoWdd2%2FQb7FYs2V32dBXZUY4YBDLULEsAp8Fa6wPQ6JThfoSrdgSNusl4bAzM0e4Dyeif%2BLgSkw2uZZlCzLzF8&X-Amz-Signature=1327b4f5b5dfba9876eb48b936b337ddc22c4e23dcf4dfc7649eca92ac55c018&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
