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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U26XO3B%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDEB4CyNqCzxtByGpgzC4hselgXGrpOtmu%2Bl1Sef6eUdwIhANP%2FOnWcCt7gl0QqpxUjqBkA0jrBBmelyLcq2qR%2FT242Kv8DCDEQABoMNjM3NDIzMTgzODA1IgyxfXTw%2FeWA79ZuohAq3AN0xsWWo%2FL5oiR6jsvmtoGMBBmwmtqEnJDkvddr4jMqqWBzu%2BPseIJjzkrJvDcAsGnCad3%2BytLwblwoOPKllOAhkAoxnlyzWHn1VfmJy06EAF1QJ9Y7JCHFtOJav8eiHVMNuIZMR5t4kAFN5DtlY0RjbIvIVyeJh%2FAP%2FP9t57Eq01w%2Bw03PWsF7uHN1hTxNjcvn%2BQEcZwIXGQLq8d8EagXnUKAiBs5aYX%2BbspRbuYQ7EuO8SRPNNzXjCPkbkvrp8m8FXYvuP%2Fk0oYGIWcTaIuTRIKrAvJGdiGQdGHd9YzOr1dxtMbX8hp2DHAtdg91fHFk9AdOLwX3fQte9QV8md7ugQdT0MRgTC8R%2F1PSk9gmnZTstiPB6fY8BMZO3UPl8ISVq5R2y7ibgUaO4JSrznVoMN6kynNpMC0AH7a5tH2ZGUzEtywlwGD9gK%2BoMQv4CDTd%2BNq58886B9AtA1axwBIIkzHjN6XHjTPeL7xtfl1JJWWGPqMomdlmMfKJtpN0bLkIY73N%2BK6IYa%2F%2BR8ebSVIF4fzZ97n4gvGU%2FeB5h%2BeTnsfEs%2F438gjf%2FR0a6Dd7tDlVndtIC7Jj0s5t60aI%2BlREMhA0AJ%2FIU%2BcsBQIcrL3BYlobjXoAdvylUOs2f7DDJurbCBjqkAe%2FNSaeYHBppqqiLrn0uPRF541HI%2FqHfo%2B%2BgktIdNKjEgeEZyhPUBCNdB8MdL%2BKtEY%2BhbTGp40RvLZYWvYfI4lZC8SJp5Z930PKSY%2FMUlzEHt5EQNDl6x8%2BrAnNVED9uBnxEwqS5UhqugCWDl9ifw%2FpLh5tJUIytYxUqNSVfPyYMFgmK3rhqpjLajHu%2Bb6IgPe1%2F1FmTXmShPxxRUwXsKAhIRpCG&X-Amz-Signature=4f15a8210ae4803254b318db46a5262fd940090f27ba1f175585e5257638b192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
