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

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673INDRG5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRxZI6N6KBF1QjpqXwfyLsBjdSktn%2Bk2%2FrTLR%2BbPjrCAiAj%2FMvODPYIfuHnWM0J4f1FL3QI823jh1MX6ia%2FbbksqiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT7Avt6yrgfLbFFebKtwDt7tMHbxpsO%2FO7qE8c0e736vHxx85RkHCnC3VwuTVissYTKgQtB7fkeZI8NeNzsFNLfC%2FfMNwhzl1fChdRjL39%2BUGJn8JlCEuL%2BQsv8zx9txOQD5qob2%2Fq%2BPplIE9nrjuB98zRhgpk0ZjAOIa85BFhsneCGHVMGBJOHuWPl%2BcMCQLiBVqr141D2WNprHIRgl5y0wMsSBZWlxmqeyt4Ogm4usNm4psT3UlM7NWsddIailjvxj86AN8XTwQgMSL3k8ubu5FUNiutWA0LDMXuIwvhaOr3g%2BFmCJniXJ%2FWB9WKV%2F4GYU44lny0U4k95tVbKwtp5wgGsH8gDWwcKIjScx6%2FFVTSeHwBuL3RFG3bjVamZdve9a4aLBMbpVKpVd3drGd%2BDRa%2F5B8ETR5F5c4K3CVEiNPvQzhFlBBHZH8uRDPAxVU%2BnZ9j1fVOFDEz%2FPs1JC6su9E3ZcQodvIHdjMP1cs4ExSMUiesbs%2BZecnNvILDku0lZlidos5hFK4Bb3fynM%2BtJtkOy4sXz5KrhSVG2wOLuUomJfV0bDXBFOanBx7m7gZ61bSo3BMdl9QGDCFunfHWUQ%2FM2EvU4FfQtWcI1VDLpWWeUI3HVtTwtYRdXYaYfaCtg7darHQAkwcuGUw7ajEwwY6pgFFgH9xrJT%2B%2BixqPPmpmdtYlBSftrUiaYpNSPZRq75J%2B7rM2mcg%2BegJwRVZSDdV0pIyN7PNpkveRfARtTqvcLOjeKy8QB84G%2BOj7ZZUeKHkhSCWnYtKuMqJwzTxWVTFwbAscCksUPoo65%2FosGbSGAKt1wPo8IBSnYz%2Ft6rISAT9RZjzqhicf4WRYXqg%2BfoYnF31SoV4VLAqU2wb6pjDRFBvk2L89mYk&X-Amz-Signature=111830a2dc09c83260c9367f1af09b6905cc3251dc9913d60a53a4c82a82a508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673INDRG5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRxZI6N6KBF1QjpqXwfyLsBjdSktn%2Bk2%2FrTLR%2BbPjrCAiAj%2FMvODPYIfuHnWM0J4f1FL3QI823jh1MX6ia%2FbbksqiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT7Avt6yrgfLbFFebKtwDt7tMHbxpsO%2FO7qE8c0e736vHxx85RkHCnC3VwuTVissYTKgQtB7fkeZI8NeNzsFNLfC%2FfMNwhzl1fChdRjL39%2BUGJn8JlCEuL%2BQsv8zx9txOQD5qob2%2Fq%2BPplIE9nrjuB98zRhgpk0ZjAOIa85BFhsneCGHVMGBJOHuWPl%2BcMCQLiBVqr141D2WNprHIRgl5y0wMsSBZWlxmqeyt4Ogm4usNm4psT3UlM7NWsddIailjvxj86AN8XTwQgMSL3k8ubu5FUNiutWA0LDMXuIwvhaOr3g%2BFmCJniXJ%2FWB9WKV%2F4GYU44lny0U4k95tVbKwtp5wgGsH8gDWwcKIjScx6%2FFVTSeHwBuL3RFG3bjVamZdve9a4aLBMbpVKpVd3drGd%2BDRa%2F5B8ETR5F5c4K3CVEiNPvQzhFlBBHZH8uRDPAxVU%2BnZ9j1fVOFDEz%2FPs1JC6su9E3ZcQodvIHdjMP1cs4ExSMUiesbs%2BZecnNvILDku0lZlidos5hFK4Bb3fynM%2BtJtkOy4sXz5KrhSVG2wOLuUomJfV0bDXBFOanBx7m7gZ61bSo3BMdl9QGDCFunfHWUQ%2FM2EvU4FfQtWcI1VDLpWWeUI3HVtTwtYRdXYaYfaCtg7darHQAkwcuGUw7ajEwwY6pgFFgH9xrJT%2B%2BixqPPmpmdtYlBSftrUiaYpNSPZRq75J%2B7rM2mcg%2BegJwRVZSDdV0pIyN7PNpkveRfARtTqvcLOjeKy8QB84G%2BOj7ZZUeKHkhSCWnYtKuMqJwzTxWVTFwbAscCksUPoo65%2FosGbSGAKt1wPo8IBSnYz%2Ft6rISAT9RZjzqhicf4WRYXqg%2BfoYnF31SoV4VLAqU2wb6pjDRFBvk2L89mYk&X-Amz-Signature=8e18c6e31e48c65f3e48d873cba2aa97be0e902999ab9501c6f3762c799950a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
