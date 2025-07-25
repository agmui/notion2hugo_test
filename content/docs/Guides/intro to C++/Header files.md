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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RLT46FL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCICCuwTPOw5A5iKZAPYmmAvFSAfV2rLZUCiOIdaJCK6TeAiAH7Zyy6lLYK8tCHBAl%2BOnaFCxwLhd5howDnUIlEzyqaCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMSPkAaNl2UUAy%2FGFTKtwDcL%2BMm0bvHvp6uP2SnJyk9XAPpB98CvY%2FCKRJiypQHAEHgeu9nE8%2F2X1m8WZEoOG8tLj1TrKlBkuyUsucqLskiodJo3h06KyQWnC7yhlGTPLpFteP5c4ZV0pehbdEDHDdjXo%2F1lZyK73pczg8GTwUufIY1B2nXkyuhLYHUQlzzO7nLU2dmDPfqq5OtoN6CEbvYlcWwfMufbbXMC8bE6VIodTOL%2Byr1%2FRCL8CRCSeU8SSkm23C8WkkuAyqnns6mN2Q0MR1Syni4PuWhVtNMclYVGHegs7y1VB3FL9rN%2FB%2B%2FgPB%2BuAMkTso%2B41Lfkuh3AhFm%2B6LVUOxSlgTMjEEykXT5fU4qAcmsoHLDCeAJ%2Fd%2Bh%2B8yt7PFbAwXar0x%2Bhzo6TeklRT2pkJUWfNIr1R%2BcciZVEvGnJcb9gRudxdLPojMCHzVteMwhK%2ByRSYVycbgL2FGM4IDU9LsN07J%2FRRWQqdwr9ffRfkNkfM1EUdN8X4g1gWfZIIOxIbotvBI9HX5JDkl4hoFbsCiPQHgGdZHrbboDQ05T9dcsyvARl7F9%2F%2F7JY5D62NxkAiFf0GOrihwDTLhkeiitqXEDKopVjWpa6sPr52HPSTCtEvBCdCXpBBERwTdXyK5omrurskJXfAw6tGPxAY6pgH73lo50ItDZSW0Rpzg%2B%2B%2F5RRwOoI9u%2Frqq6VH%2Fhk5QoU5mFx%2FzkAvJls6jhxDG6n6myybfT9JvXTQqOpklwreh%2BqOBba23m1ysTqxy9z0ptdtkzTjnS3JM9ioMdE1sIQ2X6TO6%2Fzm1TOctDlAozPX8OlKPhGh9wHhrZQn2HlSsmMJ%2BrBLRnOwbq0Jy%2FR9%2Bt33Fhmi%2BPhqyirdLAuqtDDUMsYaK7cVe&X-Amz-Signature=f45b7dd9766b23db1aed896070ea497783607c97517a6f096e4760cdab50cada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
