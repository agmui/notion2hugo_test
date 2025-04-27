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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FPEOVHH%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFvnNkyZ%2FwawDdos0co6WtJxyfNms4zu4UwDwpiss0gcAiEAktrLfCAIni8bmQx%2BADH0CER00D9UugtboNW%2FG%2FcPJtsq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDO2hf7Y%2Bhsmk74u0MircA2oGM8kV4CIHxVZ8orpmfehWoiGJSGQHpEXjSfl3901U8Sjyo2rghqR6K6yyLFBNa7yQ1t2p9xJOGU27ZxAPX3CYuj3Nldrc9KIMGdXHBdxoEzUqtLGbAK4e2LSlWXh5rTV7UNuPbgGRMInfAAxl59nrkkEZIOZXgmWuVrmK1Ns6jxocCdzV4jtqw9plqyFWc4njbz0N7J9L8gXzMChILkImZygl8q9Eo7C4ll469Mof53CbTsf2luX940e7c5cBz9mvKj%2F02vSW%2FXXbRb%2F%2FBcwEhbsrNlYLyK1yLuqNIymgt4ZxOJC9sgUx9PkwJJEtIVzBZJyHGC6ig0H5CqLK0BVXJnCalJbY9I0J1jbuOttt2SfkTQtCASRtZG1QfGpynE2VCBmx5mfeFdh4lAlHOpJVbbT1aR3mayDXzm1kjELtIOXiqUTCIXH8XZXvvAWo5jxKtDRHiQ4MthMFldtTSMB7TSkK%2B5ROj7jEg2FI2e2AYEEEpYR%2F%2FgaaliUU7zWrV27Uk%2BNwVgU2Jlx3vOrB4oQRwa1EthhKvf2SNPj60yH5nE8NbNfFhQGm9GH2IKIxv%2Brk1lwQMFp3Hmzx3QHlRKImaQfMWDLdNH11iHw9ssRucJStNS8O2C7F4sjEMMyKusAGOqUBjAtYGcA3kH4VUNn5N25ehQlM055wLqFuOn6pSilQJAZsE5sDDfA0pfbWCV%2FG6puADntRK%2F2dbzSsIsvE%2Fr6q1xvN%2FIvHMqJeUCbM8%2B9SI2t9ibGRPzjd6a9zaADuwhSIN8oJafgWFCLyTm3qZInXUgxPn5Zitf2Jr9%2FS6iFLjzY3KajT115z4PkD888LFLC5%2BPS1b7LB3L4c%2FTHuvHU8LtWj1Reh&X-Amz-Signature=3394f6041f69362c4136d2fd541a3d4b255478adec37044447201b0090c1683c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
