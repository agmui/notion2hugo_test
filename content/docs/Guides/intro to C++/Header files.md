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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XROGRZ5Z%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDnNe9eEhAOX%2BId1v%2Fs98WS9BMWw9hcznIt8%2Be%2B%2BSNHRgIgOj5mn3ZDtNXnRvUPusCrsQJVCiW148gfz2tDJChv5cQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWqR6v9oLLFVUDrZyrcA6%2Fvq6sakCSUOusKBgbNoUPwL6QyV5ye%2BWVO0pGQ0FhDslAGreEPbkzFCoKBzUlNbjm9HKNDlO%2BN5kVCeWUnVIAlWWepsDsuu1IwUqiNL2ttF6uTo%2FaGAarGDYm5jXbAZgWtN%2BA4Hq28Ypd3N4XwNQqAeiwwIiy9BblspIhFAb8r2nxwXpkbx5xDtCtdyoXFNUiBefHKGpLbAzNyBV3cNm51asKq50qVHtOkQRBEcYVcoWKHYHRHDnNe2MXWEeQXJp3m3i0NcYEvqnCqn28wb6QsCZ0Aaac2W3wYO1jitvcz99oR%2FtmoxqwATpRkyGjCD9j04jgjQdw2Id9aAqZa7jPC2FpfWK7nBjTCpE5EYhVw%2F5NkdM8qcmw9fKS%2Bx%2Fw7a1M6V2W8fHupJPNYAWn9K%2BqILDsNU6trs4vDZHWJCw3ueGv2r0ndragQkKiqH%2Bd1odRV3IKB9KhAC%2F0CjYrgDAsqZSBsGr6j7KH7wqG6NABvB4AJGAzAYFLW4kU36vtb5jdwYDKbidzZp%2FwyNk9NhmqbvAaR%2FU4j3yXOt8mPqY1yrkywVR7YoajwWo6tjgIHhBHC27OBl%2FREvxz2pBrYtdJMzKDnyrQzdnkCaSNj0y4cMJA9zxDGO8OLpVuxMJmkksAGOqUBL88mupvo1oUfkGMhbjybUbvmGrMUTikqi%2B0z%2BBrapdov1JbdBflqTzn3PFh7rwRCe5cTZJ0um0zr3MZalLx43q6sj%2BPjIoGAaL%2FOuZaIpvLm4oX3qT6UQOPTWr2FK2cWj8HKb78qRLH14bQr04163feqP%2FdokgpGgsVHDnJT4CMqrwNR3gBHJzIcliNVjLVi2YhPXh1CtQk08t2n5zHs7n%2Fzmut%2B&X-Amz-Signature=8c39c85c0a720f9ee537c77223437d5c7aa2b648c1031a660d2b56a56d920ab6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
