---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}


### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QH7GPNV%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQC1%2FCB7W6PxFTJhkuuFArQPVhOIEkIT3%2FZhLj1rAFlLFQIge4uHpKni19Y%2Fsb2wcNU3kMZX878dyu26kulrMo5ECXgqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNh51P91MCPOqYGh%2ByrcAw4wb38mAnDKG0B7r7L%2BFMkTArL3WdTDlbmhjpHvQjeu4WyCoBgsrWkaAmxzFcb7qFpoXaHHY5gOz31e%2BoIRTJ5jiyEBQS5z9JnZzywSa%2B7zs7GSg5MQrjkojBgbyFFWOXe%2Ff0B4Ly2UfW6VLI%2FS7jQhStAJF%2BHa3T7ifkp7CCmNjfv6nB5rgzmOxmjdXhirKvULmYT299ELtr0PK1%2B%2B7U6v9d6tqHWW1IEUqryQpdo7emRc9D3enbj8QFSClMpCu08jAih83wVDoLD%2FoVXZGP%2Fv3US%2BBxAjS83AVlCChDx7rjBAkTrgixCvEnsvzl5l%2Bn3%2FAxq29Ka69BjXSqYfG2jR6AxSwojOv1SksHFSVtF15Gf8LfHAQUyOTSciGyngvb4WdaSbgk4NDcyXusujRxejdTmBb%2F6kufL%2BCoZQB%2BBjJ5J77Ug2G7ZTCy0RzCdYR6IUdmnZtIC4QiREvrHbK57DLmaFBFF6zAYROH9bzCLAEVj6Ns9c4Ga%2FWVfvBVLdRP6kK8xl%2F31b858j%2B0x0n%2FTKDSBIEtuzRyBLQPHGV2N7UWkkYcYG0lw9Kbo12z5ertPTycDwHxQ1Lb6S7yXvlEuvKb5PyOqwxnSLUzjSfjoTaTFdBJDTil0p0q6lMJ2M1scGOqUBEwVq1O%2F0ItYSKQc66L89ZyMa1rDuztENRLOm8y79Ck16vwhNChLpPXKIcaVDgLcvRtSuKt7ldxxPXYbUQaG4L9fGD2U%2B%2FZZH6GC4eE85DCCtqEKcNkOoSm4xa6iw55HQsOClRTLXr0hfp%2BnW%2Buwa8EYeIet7olcJ87pa6ECJtE2Z7yuvv7KyKAAIvw%2BF69E4r4Rl28KW4aJ4P6ROFohNRsD%2B2O7G&X-Amz-Signature=8ea47ab69e020883e2757ddb7b1b0da6b06e30df0a57acf7f49bd5ec734c3872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QH7GPNV%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQC1%2FCB7W6PxFTJhkuuFArQPVhOIEkIT3%2FZhLj1rAFlLFQIge4uHpKni19Y%2Fsb2wcNU3kMZX878dyu26kulrMo5ECXgqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNh51P91MCPOqYGh%2ByrcAw4wb38mAnDKG0B7r7L%2BFMkTArL3WdTDlbmhjpHvQjeu4WyCoBgsrWkaAmxzFcb7qFpoXaHHY5gOz31e%2BoIRTJ5jiyEBQS5z9JnZzywSa%2B7zs7GSg5MQrjkojBgbyFFWOXe%2Ff0B4Ly2UfW6VLI%2FS7jQhStAJF%2BHa3T7ifkp7CCmNjfv6nB5rgzmOxmjdXhirKvULmYT299ELtr0PK1%2B%2B7U6v9d6tqHWW1IEUqryQpdo7emRc9D3enbj8QFSClMpCu08jAih83wVDoLD%2FoVXZGP%2Fv3US%2BBxAjS83AVlCChDx7rjBAkTrgixCvEnsvzl5l%2Bn3%2FAxq29Ka69BjXSqYfG2jR6AxSwojOv1SksHFSVtF15Gf8LfHAQUyOTSciGyngvb4WdaSbgk4NDcyXusujRxejdTmBb%2F6kufL%2BCoZQB%2BBjJ5J77Ug2G7ZTCy0RzCdYR6IUdmnZtIC4QiREvrHbK57DLmaFBFF6zAYROH9bzCLAEVj6Ns9c4Ga%2FWVfvBVLdRP6kK8xl%2F31b858j%2B0x0n%2FTKDSBIEtuzRyBLQPHGV2N7UWkkYcYG0lw9Kbo12z5ertPTycDwHxQ1Lb6S7yXvlEuvKb5PyOqwxnSLUzjSfjoTaTFdBJDTil0p0q6lMJ2M1scGOqUBEwVq1O%2F0ItYSKQc66L89ZyMa1rDuztENRLOm8y79Ck16vwhNChLpPXKIcaVDgLcvRtSuKt7ldxxPXYbUQaG4L9fGD2U%2B%2FZZH6GC4eE85DCCtqEKcNkOoSm4xa6iw55HQsOClRTLXr0hfp%2BnW%2Buwa8EYeIet7olcJ87pa6ECJtE2Z7yuvv7KyKAAIvw%2BF69E4r4Rl28KW4aJ4P6ROFohNRsD%2B2O7G&X-Amz-Signature=bef93bf538307c6bbc9a10ae0a70b0395b3d386b3ba1726028a6fc5423fd7009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
