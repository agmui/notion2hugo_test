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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RYOWG5K%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDyukVNxGIspSNu8Pc5bDb51J0UWT7mQj8kqHaDUglEJQIgBf7TITmNCJJD9%2BmL9Kj6GuM%2FdU9K6sgt42oY%2BVSlV0kqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXycpJuJ8rCd18loCrcA%2BtatTxD76YVdtf9mC9HX45ctdWKEXNMAlVM8FawVioVMVfpd0YFB539rbT2J5YNU9Di8cCOq9TfhOAqp2OG7YZy2h1b38vewhITlEd51jgmWult7isvMwJC8aw0v1e5JMsIjCnqv3LeAdVWbNWcA0MfOSyMwSHIJEQ8wtkMSwrzsdm9jYX73lRDY4Eu7eBKgz4o%2BhFX79E6nps%2FhS%2BBp9BCwRfz5b2cyPRC%2FdtEANfhJ2Vx5k78%2FY3sEy%2FzXNA8cFhhMV%2BR6L46kTU0Qin%2Ba%2B8gnkrsK8N4XISp2Ss4CstcN%2BruDZr8GFhEXVAU95d7fHJnhAd9hRZaHjc7%2Fl%2BE%2F1IT%2Bny6AnnTXrH2KULyHk%2FbDIwZywtKqDsEdpdj33vP%2BySn3JQ1SqKmOYXQJhoHEEiEENwmJWJ12DHegnluwbtrXfmRCtJPdhQh8hbXTLmJ2P%2BLu3JY3zCIsWXH1oc%2BbFgw%2FHA0Cx3%2BIKPTfzdsvJ%2FUwFt1UTYNt5FavGvE8TwDOqpYgtWAEDgyGc8WrGxLGmWDjt8x2Dso%2Bk6x5iBeUqdsBu5snEL5Gbaku2nTaA9Gz6F6t4gt4KG6rrxM547ozaK1PoBNQLZMEC%2BJzPg3eV0Az1VXQyl2KmWbh1tuMP%2BG1sAGOqUB%2BnNWIvAUBD6El8LBn5qfTy0hakKiZ%2BUPtp%2Ful3FpxwrvFu1RHY9OVd3CGFnRowwDmzJhZkMw8gMRXyEi7jYQKvnRkO8IWF1PtrjsFNEp2V6P1EjnmGVRk6CTZdPFr3UeVhT%2F7IeE3py7cZQ8w6%2BOshKsL5LbD1BmGVwQA65LijvMUoPorJOCRTmDU5ffKW%2FEOuBz9mNHnqcALbQX3MbH8o1Xcd4l&X-Amz-Signature=5c1d4b3e2178cae22a4ef01b82c266d0ebab35790708e378cf04d4c35c199b7c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
