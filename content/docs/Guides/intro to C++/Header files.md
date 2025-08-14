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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAOEM3NF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEeqd9oxJNrjTpI%2BWItOsH6YOot3k9wybYEyr0Rek63pAiEAnXoEvgbT7Vw6VaNWwrOupCQ0jGalLyWiy8XpXB8lZ0sq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHbwZndM3VYDl49%2FPCrcA9%2FiCFf5bzYpgGlYq%2BuHvC4Q84hRwNjupj32MXAeTraQ4vtDf8cCIOnDnoTYNId41HMBfC8MaEun%2BxTaSYi3uyQgWBEsnx3VQ%2FldoNIqneKIPfJUnpsgyHyRs2jT6qfpW6FOr150gmp%2FM37YO%2Flylxpsy8ol3uf6ihfgBkRg0%2BXNhpcKcndvSYSFPj5PN%2BIiHyBXfev1xXjZBJjHrXl0d6zSA6ipT%2FmHAqPQo%2BQKmv3I8cqg4fvuVHppZ61cEYTwtmEql2FO6ZguoRmmeJJbW4PMp2T1QtU2vMk3iClY7X%2B3cyssGjvdblDuBok%2BjV0xihaAaERqtXbrbdDZMd0CGqRK%2BZlLo5gahM2KLok%2FmF1rZa1i222AsieyYLEG3aF0uaiRbM8zlwe2SvGpf5ApioAmBqsRFziNB4FpPB1osd7B2OfR%2FiZkUMOamwwhgPqSbMsrdYxyc1cAYvtecXrJ8uPGPthkQTBlfn4ENuNQlxu0X5PudJ6i%2B9jsB%2FXOxGfGSlLEYTvhOjmihD4eEW8uclYImBxorcl9WQASF8l2eXZeRRRJp7%2FWi6UvnLl5ySFT8VQiEw8UI7adQvvavferKI5bTfynp%2FUZc45twCFCG1S8ySlvNk4qYFuL7d5oMLaL9cQGOqUBBFWQGiDXZopyRP6OQvIajlKyuSfexq3F21Y5t9PGmt9GXA6tfJ7MjLwN1hnDsyXyO4acDLcIvS2hdIGiyhIqgoyb5ot2RZ2OHrJyx%2BDClozaKe1qYu1DODFCeFD6xtmG6DCPt2lUyKB1v3IsjZ35KODF77DhRCwkz7Lbl%2Fl31%2Ff050c6IG9PYWTgt26C1%2FtQaH63k67ipZz0OU0tdZBxrmd9a20n&X-Amz-Signature=e8db64facf909a116188f64b53119c8693418f50c698fe86bcecbd30da14f5d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
