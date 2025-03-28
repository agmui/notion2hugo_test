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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJJM33HA%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWY17OdVK9zoOzIZiDQOduKmfpQn19jFYBQUrEhhUKrAIhAN3HTLg%2BZmMrwd7rt9y1Ci%2Fu6H0GcR4ERuC4DJeWcwTqKv8DCFUQABoMNjM3NDIzMTgzODA1Igw7tMEd5bE3dyRETFEq3ANPfz7iOUBZuVyiQWp8uulL5QXIWytavkBiMhcLJw2p3ybQQfNHG1%2BGHMe5bxTQw3%2BNNH87Z%2FbR5f6F1UE3Q3vXsBHdzDhq0c40E1sgtGKzvc9V9F86yfay%2BuBOgUVSr80weYQDg6m%2B5eff%2B3FJiUxseunShBrroLRqCZzPg6AjB1jijF53AyfUb03MuNV%2BLCadaOILmQwtJLT6Spu8SYS%2FlDmQrUI%2BKXcTrf5MGAyGWKBBZXwy4v0R9FkiCd2nuAC%2Ft5LEDAVsJFd7rlnpEczK56O0q6Y8KIZJicARLRc6m6Fdn3oRrWXJpWtpo1RxeVumf0G6hqd7hG8msGVeADVdXpMurekL3JzXtm9xQrmkWacQSAWzuvLib1p3NH2CdnmhcO5uQXrlAfBVy3%2FIlI3m3m9Lx9EwxpizzFBC2dFJ13y6XoI%2Fmd%2B%2FJorZw%2FQNOnWh%2Fw%2BzVOwwy2etttKDyfmP8WAmGQ9wBYq4E%2B%2BlMsbsRz4yPGMA8G%2FF5P6WwAqQTK0KnPOEmUiN5HKFYbwwFetkpK3CBlK2bcNgMN1mNx6vC4Hc8MFp7S4TgpjtcGsKC3uSJdbTzAc9ZriMq3Ym%2FSxahqLrjpwLfMRrZViWT6ukRNIO5sl38NJ%2FNiRYuDDVr5i%2FBjqkAWBBzobmwbXsAlFufQmtIdRFmr204Fhpo5eno45QRd4KeQeLwxIj%2BuhkQjeMFUBIbdniwE7DLsBDRJC9dcpQvri7EiKuA5YCmYizCteoCvIOM4PAs9TQ1Wfv1PgCCtzpjErh17jRD6udaxJqjA7rBi1xnrANHQqp6%2BjDTqMeoTu2UEAaAwYlRKyC0fltYax0uXR2dpswSTCDrIwwH2iGQZlOIUIn&X-Amz-Signature=e938da278582463eac1fd865d67a71c0206a7ce09fa71a3ee13f8fb2a800f5c0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
