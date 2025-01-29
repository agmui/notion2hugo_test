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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CG4XYVB%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUxKz9WseOXJQNnt4%2BRlhH7f1ox%2FxQg90KBytViznMSAiAuSa%2B3l9BxWDMePS56MEX7EUfW9HiJSwxm18N8SLHQfiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5qhwlE66DWwvhPaLKtwDm%2FHwF0bsBjU4KsdpyuHCnPDTAgaNB1blBVHb4AkHlDcmkBzw817duvHJsVe7bhXWyMxI2Ps7kK4B2yBz0dW52phw745g48XWPK%2Bp8yWetkg7tyk7ltH7b09krWA0PErS7Ko6poroUJxb4opf%2Bj6fFiEbzV3fSqkQAgFJkZTtDHYbqcyndWYhhTyZ6WZfo4G93gIOA2WnYDWAAFFohfTnyoiCakXDwIQZvClXdge%2F6CkCD9IUGUv6VBU3%2FI9p%2FmEkVmuiCcMMHp6wjxvg%2BuzOMrPjqykdnrTtfmmolj0SZbBnJz3mi6wE5VD%2BJV1o%2BRgLf8mKVW2GmfVw0H1qCROifvbL5jp1wFO4%2B7X7wXBeGSq%2BpXNbqfG5KBQcX21sKvKOS1d2LNWZscCepEYP0u4YtssJows9hRikWDVuM%2Fxw%2BGjmFAcXX86jebjM67zlDeCvRu72gV0F0cVbVH9iLKty65AjdAnqElayUCaG4fdsa68xd89cvi79gYRVOsaSCTyTnXGFYkFhKHL%2BvsQQIyhUvoOOZOTk8yB3eogjY4GSv598R4TmV8ZtAgcNOF5faTmffNDa04UkWwYlPQP%2Fr3MVgVe%2Fph9k1iX7zf9K%2B6DOOEtwdeWQMTvbArvjGlEwyvbpvAY6pgFLNmO84x6c6FA5ra3fzQPVFbLzUAppvAU2gV3xq%2FbaYus95izFtNt7uT5%2BZo7xJVGNpfCi0nq%2BW4y6Hwcl%2BLXDSS26G4Ek3wNQOCBBBKzvTj5qQZDWD9uU2PNECDDQVoqsjXx5tjDb1odfpcF6CiRxEf4HsKetWvPpCE6qWZ4w3YZRzJBBkX6xJrY1ORSuVly%2F3oAJIdTqJe20IK8TPKN928%2FMXbUA&X-Amz-Signature=ba5490079fb1694a1ebc4645b73811f6fdab59b9acb0be565f8872c577b913dd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
