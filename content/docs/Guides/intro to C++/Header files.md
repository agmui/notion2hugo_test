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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNTYQVD5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIDSsiidAAfTegtnLyRcwcacJPwmDOZZ8O6342d6zshDIAiEA0jDVYt6IHRm0O6buli1Z2fe%2Ffxmps4OabnbGEzZ0nn4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDP%2FZ22YSc69nqpEfNCrcA7KBAW%2Bf%2FgukgbEm2D%2FfLl%2BoId4R0CkhVEJdMcq2NdlRvW8Uz3UucP4UwT6%2BLCgkaZm1VSxYTUqMiDLzqtn7BlZFTMYdNikqKf7qkMQfaTbYm0sskezIYsUvS7D06p50CVqCxPKmI8fTSuWAe5L9fJc0utnYfLurRaBq7ZfbDziceZ%2FZo7zncj3Yg%2FCMFQTsnNC6zdZfkBVKNsPTCuk8tt5zR%2B7Q%2FK7KnMX6qkUfsrOn6m0liLs%2FjSedrkUPufMxLk9MxU7trBSN8FDvCTDnHNPePIlUOJFAqUScYPVULI5TvGqYpHexe0ypqKnXZnSKqUWrCNCVGNxV8eZWI6iLe36NBL3MO0ROMerC%2FQwEgHBERjqd3%2FGsmryOMIpt9VxKLaDF%2BOdN4lWnt6uJ6TiHnWhMfsBidUuD%2FZSToI1Tr%2FjmpjKTQpy%2F4x3VHZnHmEBO2nOs5n8liu%2FeV2JBCVmhmHPxxarMGS0Oyb9LuX6v8D4MvwjoYetNOrPQk%2BouQuTwiPEOaPgJXzbfEbTh00%2F6EWXfKbz7h%2FUshQnzcN76Ib%2FInSoFtFumLtZTPdh18R%2Bic1abVRGph2%2BdiPpFyjbXgoChSolSSTQnrSJOGjBXxLCRSrtA%2Feh1lwAZ06zOMMC7jr0GOqUBtuu2zckysmEkeHxokNByslFFMru82IcyYAyzCzU97seeMIb4QBWW%2FgXYHK7QXYgbPGs35fM6ltvFArlhVWawJihJDk%2FbPG2FP3qUiaHkEGq5XGeCRkioYWoFkxeMRPfkm67lV%2BBcmFNaZS9q4OCz%2By4eCefw9Gzrk8ePiJhNusWhVateYFC0SafgWchxmsLh4QHwNdrrcUUGxorPBt4bAgbuP9U7&X-Amz-Signature=33dec18086ac63d9149ad32f4397d62ae7a2fd02cc7cfeddc00cad03f1c75e6d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
