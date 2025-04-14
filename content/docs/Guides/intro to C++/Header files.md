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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWD4PHYV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcz1Wz0XH020OPxcELRpJq0VzNi7tNbfvQespntYjmtAiEAmslCgND9bl59BHOTBDTQQyw5L9w9pX547Odj3hDR%2BnQq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDjtaoF78EJ3RJNupSrcA%2BGalfIw4Costyv90ytvIZr%2BszBbMXlyTZCDyXxpUzAL2oskaiLNPSX%2ByQ%2FTFVn5HAAA9BkyheptAL5hUL0S94G7dUDmzU30Bt4WaGCyTj8HJXzVmk%2B8siqGqS4Q7%2FeQRX5K8dLbX45o6bg50CGXQ3UWk7tcnkwCdX6TX40I7FUM6K4WyUeuf5AQbgS4o3yYCBXjHJcrjRyg%2BTUV%2FVo8VWmJftj3FjZNI4Noa%2FaEa8ktJen%2FybospqC%2FYFnsYyuuC%2Fu1BlOGAGPJuiRVotMYhKxtLuc8ZM9MyV4OsmX7MpGpXpnAN%2FGQvmsLKSbmvQ%2Feu%2FwNlf5iqknG8d4bKkai2BO1q%2BFPY2ouISNHesOP0m2N1gxotAPXjbaDQs0Au0bxSAozpDwJjXDJEYLmE6o6nviyrBL4hZWl9WgAyTNEA2heXQsE23vfNQ8shozodKflNDKlJrjksh0TcnDn1HZoKUky7xNfkA38TlvjL0%2B2qeKezdFwr3op%2FcIv%2FeSToCWj%2F6UZGbIuFNlUVWfES8yk5QcipZwMYcafKt0YqX5eazekaIx27e1vy8oMsRyPXWYwYAgmZ2vhvsINu5pehQ7lvUHe4%2BscrJqhMPoPvwY8%2BvlaDPa0%2Fd9cow8MU%2FnKMNWU9b8GOqUBZd1%2F%2B7GcYYALlxzgW9lhEs763QlNmeA0rEFr98F0FPEnf1PDfqWVUKDNTS%2FxfUDPPfG9yWyQyRT9OaYam9tjIq3m%2FHxnXEuj%2Ft6JAkV1bsPDfKoqg1ExTIJ2RJqDOh5d6g4W16n3AVpHPz4KZCDwjv2EHNn0QIPixiivMk9uqUKNXazEYq%2FB7bre%2BVKidN%2BoV81iTu%2FZE34Ksfj7CaHGjkM8qF90&X-Amz-Signature=9565cd44ad40cbdf4accc0130e4b83a3f8fe1cec6c6248f312d59e26a3ee808a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
