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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642A6P2UW%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIDvJ9JvO2q9xoPP21HUU8IppvgBxGrs7mrOgwMfw4DR9AiAHGnXDttJQYEFAMaXL0I4yNJ6ASXQOTEiM4RHlntQV9yqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSL80bfd25%2BMDUr5iKtwDI%2FRhLaSWpCT56HVGSGpmMQsqzE5DAV%2FuUwmzkB8iZfILVPM0iXTa%2FfY6O%2Bti%2FT8ENFhQcAjGz1M3wDPPmfnlTPuVh%2BrDpF2%2BTQHwvDavIoBxGwS6Xb%2BriPyr9IR2p25nxkeQxiXf%2FMhF4QPn6VUBqjX7UW8nfmELF2C%2F2Ty8oG%2BQ9ZFJKRKrSgR%2BYKvJ7SluG%2Bbu7EkRHd7P1SIfXeUxn%2B8WJX2gXll%2F%2BcD%2FFoI90HvxWNHWcJupj%2BfC4eshPoR6eOtF95abeb%2BINzXJY6EaAQ2L%2B2gc3fr9DsSJVlI6sNuBWsqc7sqFDr7qReMqNdNRuOnJH7QjlxivM8vh8EEwvlrlxM5b5N7vYKFCqTfXHCiXobzt8z9F12P%2Ff0CbpLf1BUnAcX36om46L3Z%2FvtNthdgyze1L2i3GvZgNTpgFNqD1Bh7ExQOX9NJstfnejQjdYjhs7iF%2F1JUz1Et1PbNopWzlxTSI1%2FaAMHlWPtQmtj%2BtCg%2BQcfrtJxCL0DaXsJ%2FpbDa%2FOQG%2FlP%2BRliM%2FU3S3yFKeAyff%2FaL9wdwZBl2oye41DE9RVScH%2FqhlOMwfHkoa%2B6bh2BrQORdGG%2BW1I%2FrAMF4rtkvePiJ%2BADL1tQr4jXEo3xDnvp%2BL2k3hnCswnIewvwY6pgFSoTr%2Bl7so2MtvbGOW6pbalZZWiqJYbXROhtGlAbblpiNk%2BPO3QdYdJD0gPowZkhZ35dmQ1rlM%2FHhTYFte9aCYx%2FplNL8zOA6sKzdTXern64o7mPROsK4%2BxItxiGtKOlnN%2FtJ3DOfreBcldvPgLM5UeYf7D1EVdt13UShf2j1NJOA%2BLWAaP2GGIyOXdHVd2EFcgf%2Fty03cfJjsfmThTClxIlw8ajUZ&X-Amz-Signature=ab91cc86b0d008ea40dd06e924162a2f45a4082611b9bb4ca0509e4fa9378638&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
