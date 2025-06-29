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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGMBWVSQ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA62OOxunUDFjjcqi5ihwrHdDnRNNnwyyGIfDVHDW9q5AiBaGSosmhiFgEw2ofbYUtgbEWhrk7uS58KypBKj19pXHCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1M6HTgleE1BWIVIBKtwDQRpo4n9dGEMRnGn7kCSSlmeaLOFCnbmpx%2BFKMToULHLk%2FryvPAHi%2FnmTJ%2Fp01ug32vcYAJkUrJkEk%2FemHPHGn4HFK10wF4AQ5EeM12CVUFLuCIyh3BSYA%2B26D384e3VRgO%2BqPXyf7G82GUB%2BeslRkeuGJMj5dh0atZz3HOhL8ey2E5BezAAEhg28agMi7BrFMKSivisOguatDPipMXehjupVM6FQV4GBLikI%2B3Tv4Z58Vos738G0aDOkoAUlili%2FK5OXgWejhyA6tn2lU2rVnkyaBNF4D97a3x%2FsLzK6ly3RaR1niRfdkQxm3bmqcoNa%2B6FcjMB8c6LfoVr7W6UXDuHvFqB45XmQ2o0T1ucB63noFq9XBFbxx3FAoWr7jqPlS8qZvi3FOD%2F3nKB6kufMRn13K1D5Nzq1zsxqd09nvOHII2uxwySXulMTrGpolHfFLyn%2FIlvKgrxhMI2KcirFgRuiwbaUbMfYWIs%2Bs3AWTNl9AfZ7oYcoIMDkDBTDxrtgXjCxsjQSIzfbwipPZtyNw0midZ9Oap7u6VpdqOdo8%2FA2cecpChvzap6hjZCRA%2FNckcPiMU66WAcH2PH3eZaHJTX1%2BQZvk5KtLX7YkYky0BXNhpEWMPRY5ACCOCAwk7uEwwY6pgGpCbsEyxqYh4Fw9GSLaC5e523bMLM%2Bzf%2BejuRxafjSwZ8vyJa0RFfOs1GdnOe4oBLosYnCD8rrfxM2fFaS9M7bGakQ4mAtlxU5l6glgxUVqCoz%2BUEqsdHY0TXvvPOh8FPC8sSQXuf5h1YV8wUfSbmXT%2FYNYAvmDboMZNhXyPw0aR%2BsVX60OUf0ErIxa6qQcg5CJR6ir2qtFQwUYsTSn527Ei4W2iyY&X-Amz-Signature=d38e50d311394dbb7f3195bbbdaed1cfd92a4f4b89e9c295d341fcea9e2aadd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGMBWVSQ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA62OOxunUDFjjcqi5ihwrHdDnRNNnwyyGIfDVHDW9q5AiBaGSosmhiFgEw2ofbYUtgbEWhrk7uS58KypBKj19pXHCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1M6HTgleE1BWIVIBKtwDQRpo4n9dGEMRnGn7kCSSlmeaLOFCnbmpx%2BFKMToULHLk%2FryvPAHi%2FnmTJ%2Fp01ug32vcYAJkUrJkEk%2FemHPHGn4HFK10wF4AQ5EeM12CVUFLuCIyh3BSYA%2B26D384e3VRgO%2BqPXyf7G82GUB%2BeslRkeuGJMj5dh0atZz3HOhL8ey2E5BezAAEhg28agMi7BrFMKSivisOguatDPipMXehjupVM6FQV4GBLikI%2B3Tv4Z58Vos738G0aDOkoAUlili%2FK5OXgWejhyA6tn2lU2rVnkyaBNF4D97a3x%2FsLzK6ly3RaR1niRfdkQxm3bmqcoNa%2B6FcjMB8c6LfoVr7W6UXDuHvFqB45XmQ2o0T1ucB63noFq9XBFbxx3FAoWr7jqPlS8qZvi3FOD%2F3nKB6kufMRn13K1D5Nzq1zsxqd09nvOHII2uxwySXulMTrGpolHfFLyn%2FIlvKgrxhMI2KcirFgRuiwbaUbMfYWIs%2Bs3AWTNl9AfZ7oYcoIMDkDBTDxrtgXjCxsjQSIzfbwipPZtyNw0midZ9Oap7u6VpdqOdo8%2FA2cecpChvzap6hjZCRA%2FNckcPiMU66WAcH2PH3eZaHJTX1%2BQZvk5KtLX7YkYky0BXNhpEWMPRY5ACCOCAwk7uEwwY6pgGpCbsEyxqYh4Fw9GSLaC5e523bMLM%2Bzf%2BejuRxafjSwZ8vyJa0RFfOs1GdnOe4oBLosYnCD8rrfxM2fFaS9M7bGakQ4mAtlxU5l6glgxUVqCoz%2BUEqsdHY0TXvvPOh8FPC8sSQXuf5h1YV8wUfSbmXT%2FYNYAvmDboMZNhXyPw0aR%2BsVX60OUf0ErIxa6qQcg5CJR6ir2qtFQwUYsTSn527Ei4W2iyY&X-Amz-Signature=a84fa9872c7e0837b529f179ad51d776ee6ab0ab28bd86e9cb3007bc8723798b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
