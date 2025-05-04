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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6HEDLQD%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDy1%2FHUZOc7pOdkKKoVlAy%2Bb2864PSw6qlZnsH5TwKeMwIhAIUHTVsVho8ifrTBQq7cKPM995CQiaXfi7FTAUl2NIYrKv8DCBYQABoMNjM3NDIzMTgzODA1Igz%2BwxsYIaMYbw1z5HIq3AMAMcqmhSnmab%2FeUaQuij6Tb0r362K%2BC%2BJAb2ApfGi%2BavI%2FuETt%2FXDputapBGaEQo%2FVXpF33ga0RtZHRScepmKb%2FxT4dtasjlN8WDPJIMo4fpyuvVfFiZRTkjFuVdf9F5OGKyhJzS21%2FOiiZwZC2VSH2AfGia6E4uAs%2BWFBnQpVDYmuja0jy3JI95tpcGAR%2F13NVisFluCFXvxc9u5oZx1SIhxQbQLdf64%2Ff6lPWU2oGf8NYpRClaIHUhVSqa5h%2FAeowu75KXBRMxjQ4WyBmXJXp9bktTj8PKn7ea481USHAAXVA9V%2BSMCrwllasNFgABBScY8L%2FiPBdiQIF9TZk4HJ8fKd1qqWMNJIZwjAHrooOI7nKln%2FZBcMMGg2vTPi3Ytc%2FTO%2FyvLV%2BB1O4vdl5wgI2EvccPsezuIU%2BNmvgtLJT3k37LZXXSCNpAWtTY8OItQLLZqwHq1RH4p%2BlcVb0ug6E%2F8oY1NyyP%2Fh0zwSDqQupXKCU29H9n%2B%2B616htZ0qO0%2FQ9etwth8obdDlsGTW1XNAqcsMka%2Boi%2FZW4vc6GOcbG87%2F748%2F6%2BJbjq06oStI4sLONmVObr9FV3W%2BbwnTDWZ9UyLdfpYAwOmfH%2Fou71qOIXFwjD%2F6mj2M95DfjjCizN3ABjqkAWQiohZmvCQV2FgP40RVwKTCjRf8Kt5GqOg%2BilXr%2BSVQbxhVsrAHX%2BoUDzUXLwHWPGOCvUsjKCZXEG3V0kg5AXxESdskFX%2FGinZNQitjUeSHRMHE3sz2bpJg50yJlFNEaAPc4gspBL3NFRuZX179UvguLPgqJypp8w1IN9rpOUpaw8xq4HQHgQP0tR69wjHlL1BKgsSLidJ3kEINxe4ctlDEwCJj&X-Amz-Signature=0863fd515b8c8b698c8dff694251dd2e8a062480f46f07f0b2f43965384db126&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
