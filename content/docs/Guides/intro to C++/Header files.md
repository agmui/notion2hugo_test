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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EGNZOMY%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIAiDGq8Gr1NXjy5LUg8bLh4%2FGcIeprZgRasUExQpsnM%2FAiEAsSd4kmkIAgJZgtGWguJn5e9fzUwA18mihh4o7F5LdDUqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA6W3gRWLhYstzDpyrcA6dTZNvevbUEqG0pTL4aPRLYV5OYVdal0ctrdlnc59U1ozf2McgFIp3xFXavPB5ogynCkSbqNUBuWif9BDUJM3LIf41usrhUuQ6hcndMlewOtTUHtg%2BQ2GwEQP1QSbkmmC2yK1AUKyibo0SVkX3N0RkXfUMe7hog69j0gG8LkIM22d4w5ExjbcJsfed1VX9N9iyeh1SV5GdECcm%2FHqgrgPR0OZoXD1%2BNIM9XrtY9js1V0pglgNx15uX98EC8RiavVWCPbY2whjd5tzK0optw2xLi7JVgWPMlxly8hiLG3gF3Dol%2F28Oymfw4P2eSb3JUCGdbOHOw%2FamTn5pWp89x1%2BhD3hF7BriPKZKaEopv1AHRIJlLHenM0jurAq4L%2B10rM4mA3CftyBcxL1dMb%2FsW1hXCJDUA5hszABs%2BzNe%2Fnpi%2FdRditfAJRJkWYnhfWJ4zuCRj5kxIiiPk2RIVQ6mxoZ102QeYzHTIIyz1iLgPpnNiamweCinYdyKs%2BaYi8UysmqMJKL7f9Z0GY1u6NPOl7xQF5WevBfjSNo%2BT6zbYks3BEj08OimN%2BzJ4iZgkI12hhHswPIwfel21Zr%2FGzkeJykS8oQZ23WT4smCtHLU5y38oX6NWXKndXi07vRLoMIWH4MIGOqUB%2Bwpd9srO3t7Y3yNIkqkUCa%2BcimVl7hiNSmIDdSkx7aN%2FehOSAG0UrPEpsNPhWNlxEzuK9Za27oE3FGBvoWBD1nU%2FkaLRIaT3gLamSFfV7D3FKj7R1DtZ1SzKTcdB5gXHNnBYSbJh4jXD%2B8TbOE6HNMBojgH11fjVTqJNUdFPJJ%2BMxw4a0%2FajEO6CRYaFAEBOuTNWhx7LLwqL8q5%2FivTFlFROip0k&X-Amz-Signature=825a07621180661658bbe95e1120226a800959dc57d4af06cdb141df868de780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
