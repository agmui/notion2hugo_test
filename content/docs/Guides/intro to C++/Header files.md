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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQTXLZWI%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T031618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrOvaeUG1Y4eHKp57hi%2Bt3b66ftzmQtWJxRoqQH9LBYgIgUgtRvi7lAIx06MCAQVEVgOexfOMbu8Gg9cKvdwDCx9gqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITDOeY8tp%2BaNWhbgircA8ZC4x6dRlzW2dDPGt6RuImutBIsx1VrTKy1rlq%2FOwWGBChGxVAcWWaT%2FBkmaWwYBSlnZLYiXKtSVEplUZLN1FsIYsuY0kovpAcRtGyovoPkP6jgsrs0U%2BGzu6hnAtq7kJo7yz5HWxvE92ZZ597rYcQQcak6BQvMuRqBd6BUHTVA4gVCQDQooOBDnphOouAAewbMbeHhdE9VLcNBGCZss6RyniaDum5da%2BB8Zl0YzjPjz7rtroe1sA%2BehsAVuaUExUtGz7z6MpbpXZ6XonvAYhpsXjwso%2Bpy4GShjZDVhSxbiLX%2BbNww3bMwHf4UDJLiTr9yqW5V4NtR2E3pN89yCFoknpaYPfiUUXRx0Qr0DmCne%2BShyF3V%2Fdl1wKgITsplaU%2BtNU0EVVhTRdC0gF8N9W4SddBwGfZfT1diaZ4AjprDN9%2BBFLjgvmjOBG1sDqU7BWUBh1K8%2B54INbaYJh7GdITjytX4vWUC76xkdA9D03hPrQPVE47jWLMgjNUWNWXJ5b3CJ%2BUNhLEiUinYrvpSm2T2AhqNAd6fDdAV4ybpdYtiV6iNs8ROyxG3%2BrFsofeFvzyl8nKi3drshCWJoti5K1O8HM3IxOm41eotCDiNe7LaNRWH7%2FPIQqJw%2B9HZMLLL074GOqUBluXtce%2FmumqEEr9597Vth1wzuaqyfN4a6%2BkabIQpQe9m6ddfX4F7fJRRQ8ogRkOFs3bohA8GdgTJZb%2B3sNKiijYDZC6yuA7LciVgz8dhqmTw%2FklWLD8PHRgV6liqLvNPW6NVoDSfHsC0q5idd%2BHc8j8MFcmH5HcO2xxm2Opk52KT8wEGJQ9RaMXPOdwlg6AXX958bY3JCqJqWVFrsf8i7FUKERbZ&X-Amz-Signature=567b1443f3d86e041549910ca67d60738e352919067d440f4cd89b5399146287&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
