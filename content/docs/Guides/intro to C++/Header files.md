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
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHFFOS5O%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDznjGSS8m6WYFFm2N25clq%2FCLamv7f1qlkAPWGFWQjlgIhAO3beRqhpJx2pj8tMtHi99KFY%2FawERqMfLgVhrbrsaXDKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbpM5N9T6Euf9JLCIq3AMzGEbWJsnTheJWrYtO%2F6%2FE%2FuNPVp%2FELpTCbzITq5SOGjlOzjSLgyYXNJbeEYz4dctBdXs%2BOBt2KA4z1jP%2FmgbqXYUnn%2Fil0rHirp4gIHU9VhMTP7dkfkKiinHNTXQFzSQz4RFES4%2F%2BvFMXdDvtem06FdC8r543GFvETHsSnRQAvrFsTHln8JlwvCF0oGG9cKzirxy2sVv5CJI3FxUf4jEx1Yi%2Bqqx5G6MQt5%2FkcA4kw5tX%2FhnvWg9uQZFNPRmWFObxZI4DrFDnYtZjfF3%2FQN0hkk3fPepzN8QlyDVGt67j11wd4%2F9fBN66Klk3Yi9sqQtUZxAGodoao%2BP2Hul95ochdAmgBtVW%2Fn%2FbSpQ3FFVr3iQFoJpYA7Bh9skcqOZxmpfDgIh8feqgaQdfhsAltCWcE1NouSf9FMAPY3XKqhtfYshb6KueulK2LfnplDHc4cxaGqVOC58SrnUK%2F8szlw5rABhEjDChYKpC5FnvA8LgjlHBGVE64MOuabXg0Ep14iTD3qUDik%2FUTDSrUMvHv27ioJ%2B9W9s9qefpriAIlITnPCJj7rgLQZRhaP7O7gcg4V7zCSAriFIHcwCGlUcLDBsVYgL3aH2yhhWuvcdXMJQeSoL9zpTsoGsUMTU6ATCkl7DTBjqkATuy6gAkxMSxfzd%2BELtRLKesu1AcMbqy9HTLL68szutjUdVGtpVh7e9rOkm4PQDfLRPiPGP1YXm8LcOd0t01rbeQ5jGERwTRmGBAFpIv8F7vqdY10Po4uS4P%2B8lSI3LFZYo2mgLqdwD9%2FR1QCYiT%2BBGnJ%2BTWWCB2nrqoJahW3vQuoWAuJsTVM%2B0DwdclPWzBdd%2FR2vI2%2FtmVToDTwlj34uA0z32O&X-Amz-Signature=08cc593a88369a4999fef7beaa2f10826206b520a4dbd2c6f451568c7f3d4d87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
